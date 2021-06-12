import type { CronMonthValue } from "../types/CronMonthValue";
import type { CronValueParser } from "../types/CronValueParser";
import { isCronMonthValue } from "../validations/isCronMonthValue";

/**
 * Parses `CronMonthValue` into a string.
 * @param source `CronMonthValue` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronMonthValue: CronValueParser<CronMonthValue> = source =>
	isCronMonthValue(source) ? `${source}` : undefined;
