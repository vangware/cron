import { parseDecimal } from "@vangware/parsers";
import type { CronYearValue } from "../types/CronYearValue.js";
import type { StringValueParser } from "../types/StringValueParser.js";
import { isStringYearValue } from "../validations/isStringYearValue.js";

/**
 * Parses a string into a `CronYearValue`.
 *
 * @category Parser
 * @param source string to be parsed.
 * @returns A `CronYearValue` or `undefined` if invalid.
 * @example
 */
export const parseStringYearValue: StringValueParser<CronYearValue> = source =>
	isStringYearValue(source)
		? (parseDecimal(source) as CronYearValue)
		: undefined;
