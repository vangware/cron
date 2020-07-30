import { CronSecondsValue } from "../types/CronSecondsValue";
import { CronValueParser } from "../types/CronValueParser";
import { isCronSecondsValue } from "../validations/isCronSecondsValue";

/**
 * Parses `CronSecondsValue` into a string.
 * @param source `CronSecondsValue` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
// eslint-disable-next-line max-len
export const parseCronSecondsValue: CronValueParser<CronSecondsValue> = source =>
	isCronSecondsValue(source) ? `${source}` : undefined;
