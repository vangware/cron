import type { CronValueParser } from "../types/CronValueParser";
import type { CronYearValue } from "../types/CronYearValue";
import { isCronYearValue } from "../validations/isCronYearValue";

/**
 * Parses `CronYearValue` into a string.
 * @param source `CronYearValue` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronYearValue: CronValueParser<CronYearValue> = source =>
	isCronYearValue(source) ? `${source}` : undefined;
