import { isUndefined } from "@vangware/utils";
import { CRON_RANGE_SEPARATOR } from "../constants";
import { CronRange } from "../types/CronRange";
import { StringValueParser } from "../types/StringValueParser";
import { isStringRange } from "../validations/isStringRange";

/**
 * Takes a string parser and then a source `from-to` string and turns it into a
 * CronRange object (or undefined if is invalid).
 * @param parser Value parser.
 */
export const parseStringRange = <Value>(parser: StringValueParser<Value>) =>
	/**
	 * @param source Source string to be parsed.
	 */
	(source: string): CronRange<Value> | undefined => {
		const valid = isStringRange(source);
		const [fromString, toString] = valid
			? source.split(CRON_RANGE_SEPARATOR)
			: [];
		const from = parser(fromString);
		const to = parser(toString);

		return valid && !isUndefined(from) && !isUndefined(to)
			? { from, to }
			: undefined;
	};
