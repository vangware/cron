import { stringParseDecimal } from "@vangware/utils";
import type { CronMinutesValue } from "../types/CronMinutesValue";
import type { StringValueParser } from "../types/StringValueParser";
import { isStringMinutesValue } from "../validations/isStringMinutesValue";

/**
 * Parses a string into a `CronMinutesValue`.
 * @param source string to be parsed.
 * @returns A `CronMinutesValue` or `undefined` if invalid.
 */
// eslint-disable-next-line max-len
export const parseStringMinutesValue: StringValueParser<CronMinutesValue> = source =>
	isStringMinutesValue(source)
		? (stringParseDecimal(source) as CronMinutesValue)
		: undefined;
