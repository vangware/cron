import { stringParseDecimal } from "@vangware/utils";
import type { CronYearValue } from "../types/CronYearValue.js";
import type { StringValueParser } from "../types/StringValueParser.js";
import { isStringYearValue } from "../validations/isStringYearValue.js";

/**
 * Parses a string into a `CronYearValue`.
 *
 * @category Parser
 * @param source string to be parsed.
 * @returns A `CronYearValue` or `undefined` if invalid.
 */
export const parseStringYearValue: StringValueParser<CronYearValue> = source =>
	isStringYearValue(source)
		? (stringParseDecimal(source) as CronYearValue)
		: undefined;
