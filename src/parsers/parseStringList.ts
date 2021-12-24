import { arrayMap, isUndefined } from "@vangware/utils";
import { CRON_LIST_SEPARATOR } from "../constants.js";
import type { CronList } from "../types/CronList.js";
import type { CronListItem } from "../types/CronListItem.js";
import type { LimitTuple } from "../types/LimitTuple.js";
import type { StringValueParser } from "../types/StringValueParser.js";
import { isStringList } from "../validations/isStringList.js";
import { parseStringRange } from "./parseStringRange.js";
import { parseStringSteps } from "./parseStringSteps.js";

/**
 * Parses a string into a `CronList`.
 *
 * @category Parser
 * @param limit `LimitTuple` to be used when parsing `CronSteps`.
 * @returns Curried function with `limit` in context.
 */
export const parseStringList =
	(limit: LimitTuple) =>
	/**
	 * @param parser `StringValueParser` for `CronList`.
	 * @returns Curried function with `limit` and `parser` in context.
	 */
	<Value>(parser: StringValueParser<Value>) =>
	/**
	 * @param source string to be parsed.
	 * @returns A `CronList` or `undefined` if invalid.
	 */
	(source: string) => {
		const list = arrayMap<string, CronListItem<Value> | undefined>(
			value =>
				parseStringSteps(limit)(parser)(value) ??
				parseStringRange<Value>(parser)(value) ??
				parser(value),
		)(isStringList(source) ? source.split(CRON_LIST_SEPARATOR) : []);

		return list.length === 0 || list.some(isUndefined)
			? undefined
			: (list as CronList<Value>);
	};
