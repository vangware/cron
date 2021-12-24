import type { CronValueParser } from "../types/CronValueParser.js";
import type { CronYearValue } from "../types/CronYearValue.js";
import { isCronYearValue } from "../validations/isCronYearValue.js";

/**
 * Parses `CronYearValue` into a string.
 *
 * @category Parser
 * @param source `CronYearValue` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronYearValue: CronValueParser<CronYearValue> = source =>
	isCronYearValue(source) ? `${source}` : undefined;
