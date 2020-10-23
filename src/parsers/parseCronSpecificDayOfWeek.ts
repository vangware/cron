import type { CronSpecificDayOfWeek } from "../types/CronSpecificDayOfWeek";
import { isCronSpecificDayOfWeek } from "../validations/isCronSpecificDayOfWeek";

/**
 * Parses `CronSpecificDayOfWeek` into a string.
 * @param source `CronSpecificDayOfWeek` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronSpecificDayOfWeek = (
	source: CronSpecificDayOfWeek | string
) =>
	isCronSpecificDayOfWeek(source)
		? `${source.day}#${source.week}`
		: undefined;
