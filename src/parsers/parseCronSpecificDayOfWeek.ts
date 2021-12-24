import type { CronSpecificDayOfWeek } from "../types/CronSpecificDayOfWeek.js";
import { isCronSpecificDayOfWeek } from "../validations/isCronSpecificDayOfWeek.js";

/**
 * Parses `CronSpecificDayOfWeek` into a string.
 *
 * @category Parser
 * @param source `CronSpecificDayOfWeek` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronSpecificDayOfWeek = (
	source: CronSpecificDayOfWeek | string,
) =>
	isCronSpecificDayOfWeek(source)
		? `${source.day}#${source.week}`
		: undefined;
