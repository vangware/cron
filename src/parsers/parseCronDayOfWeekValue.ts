import { CronDayOfWeekValue } from "../types/CronDayOfWeekValue";
import { CronValueParser } from "../types/CronValueParser";
import { isCronDayOfWeekValue } from "../validations/isCronDayOfWeekValue";

/**
 * Parses `CronDayOfWeekValue` into a string.
 * @param source `CronDayOfWeekValue` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
// eslint-disable-next-line max-len
export const parseCronDayOfWeekValue: CronValueParser<CronDayOfWeekValue> = source =>
	isCronDayOfWeekValue(source) ? `${source}` : undefined;
