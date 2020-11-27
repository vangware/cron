import { isUndefined } from "@vangware/utils";
import { CRON_RANGE_SEPARATOR } from "../constants";
import type { CronRange } from "../types/CronRange";
import type { StringValueParser } from "../types/StringValueParser";
import { isStringRange } from "../validations/isStringRange";

/**
 * Parses a string into a `CronRange`.
 * @param parser `StringValueParser` for `CronRange`.
 * @returns Curried function with `parser` in context.
 */
export const parseStringRange = <Value>(parser: StringValueParser<Value>) =>
	/**
	 * @param source string to be parsed.
	 * @returns A `CronRange` or `undefined` if invalid.
	 */
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
