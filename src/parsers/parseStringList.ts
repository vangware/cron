import { iterableToArray, length, map, some } from "@vangware/iterables";
import { isUndefined } from "@vangware/predicates";
import type { Maybe } from "@vangware/types";
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
 * @category Parsers
 * @example
 * ```typescript
 * parseStringListSeconds("13,10"); // [13, 10]
 * parseStringListSeconds("13-10,10"); // [{ from: 13, to: 10 }, 10]
 * parseStringListSeconds("13/10,10"); // [{ every: 10, start: 13 }, 10]
 * parseStringListSeconds("13-10/10,10"); // [{ every: 10, start: { from: 13, to: 10 } }, 10]
 * parseStringListSeconds("?/10,10"); // [{ every: 10, start: "?" }, 10]
 * parseStringListSeconds("13,INVALID"); // undefined
 * parseStringListSeconds("INVALID"); // undefined
 * ```
 * @param limit `LimitTuple` to be used when parsing `CronSteps`.
 * @returns Curried function with `limit` in context.
 */
export const parseStringList =
	(limit: LimitTuple) =>
	<Value>(parser: StringValueParser<Value>) =>
	(source: string) => {
		const list = map<string, Maybe<CronListItem<Value>>>(
			value =>
				parseStringSteps(limit)(parser)(value) ??
				parseStringRange<Value>(parser)(value) ??
				parser(value),
		)(isStringList(source) ? source.split(CRON_LIST_SEPARATOR) : []);

		return length(list) === 0 || some(isUndefined)(list)
			? undefined
			: (iterableToArray(list) as CronList<Value>);
	};
