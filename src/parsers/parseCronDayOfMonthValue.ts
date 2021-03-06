import type { CronDayOfMonthValue } from "../types/CronDayOfMonthValue";
import type { CronValueParser } from "../types/CronValueParser";
import { isCronDayOfMonthValue } from "../validations/isCronDayOfMonthValue";

/**
 * Parses `CronDayOfMonthValue` into a string.
 * @param source `CronDayOfMonthValue` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronDayOfMonthValue: CronValueParser<CronDayOfMonthValue> =
	source => (isCronDayOfMonthValue(source) ? `${source}` : undefined);
