import { isUndefined } from "@vangware/predicates";
import { CRON_RANGE_SEPARATOR } from "../constants.js";
import type { CronRange } from "../types/CronRange.js";
import type { StringValueParser } from "../types/StringValueParser.js";
import { isStringRange } from "../validations/isStringRange.js";

/**
 * Parses a string into a `CronRange`.
 *
 * @category Parser
 * @param parser `StringValueParser` for `CronRange`.
 * @returns Curried function with `parser` in context.
 * @example
 */
export const parseStringRange =
	<Value>(parser: StringValueParser<Value>) =>
	(source: string): CronRange<Value> | undefined => {
		const valid = isStringRange(source);
		const [fromString = "", toString = ""] = valid
			? source.split(CRON_RANGE_SEPARATOR)
			: [];
		const from = parser(fromString);
		const to = parser(toString);

		return valid && !isUndefined(from) && !isUndefined(to)
			? { from, to }
			: undefined;
	};
