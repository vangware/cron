import type { CronDayOfWeekValue } from "../types/CronDayOfWeekValue";
import type { CronValueParser } from "../types/CronValueParser";
import { isCronDayOfWeekValue } from "../validations/isCronDayOfWeekValue";

/**
 * Parses `CronDayOfWeekValue` into a string.
 * @param source `CronDayOfWeekValue` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronDayOfWeekValue: CronValueParser<CronDayOfWeekValue> =
	source => (isCronDayOfWeekValue(source) ? `${source}` : undefined);
