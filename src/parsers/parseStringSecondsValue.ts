import { stringParseDecimal } from "@vangware/utils";
import type { CronSecondsValue } from "../types/CronSecondsValue";
import type { StringValueParser } from "../types/StringValueParser";
import { isStringSecondsValue } from "../validations/isStringSecondsValue";

/**
 * Parses a string into a `CronSecondsValue`.
 * @param source string to be parsed.
 * @returns A `CronSecondsValue` or `undefined` if invalid.
 */
// eslint-disable-next-line max-len
export const parseStringSecondsValue: StringValueParser<CronSecondsValue> = source =>
	isStringSecondsValue(source)
		? (stringParseDecimal(source) as CronSecondsValue)
		: undefined;
