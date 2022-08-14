import { iterableToArray, length, map, some } from "@vangware/iterables";
import { isUndefined } from "@vangware/predicates";
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
 * @example
 */
export const parseStringList =
	(limit: LimitTuple) =>
	<Value>(parser: StringValueParser<Value>) =>
	(source: string) => {
		const list = map<string, CronListItem<Value> | undefined>(
			value =>
				parseStringSteps(limit)(parser)(value) ??
				parseStringRange<Value>(parser)(value) ??
				parser(value),
		)(isStringList(source) ? source.split(CRON_LIST_SEPARATOR) : []);

		return length(list) === 0 || some(isUndefined)(list)
			? undefined
			: (iterableToArray(list) as CronList<Value>);
	};
