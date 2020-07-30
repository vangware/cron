import { CronMinutesValue } from "../types/CronMinutesValue";
import { CronValueParser } from "../types/CronValueParser";
import { isCronMinutesValue } from "../validations/isCronMinutesValue";

/**
 * Parses `CronMinutesValue` into a string.
 * @param source `CronMinutesValue` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
// eslint-disable-next-line max-len
export const parseCronMinutesValue: CronValueParser<CronMinutesValue> = source =>
	isCronMinutesValue(source) ? `${source}` : undefined;
