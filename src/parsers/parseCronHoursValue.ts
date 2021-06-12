import type { CronHoursValue } from "../types/CronHoursValue";
import type { CronValueParser } from "../types/CronValueParser";
import { isCronHoursValue } from "../validations/isCronHoursValue";

/**
 * Parses `CronHoursValue` into a string.
 * @param source `CronHoursValue` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronHoursValue: CronValueParser<CronHoursValue> = source =>
	isCronHoursValue(source) ? `${source}` : undefined;
