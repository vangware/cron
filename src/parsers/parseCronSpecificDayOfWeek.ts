import { isCronSpecificDayOfWeek } from "../validations/isCronSpecificDayOfWeek";

/**
 * Parses given CronSpecificDayOfWeek to string.
 * @param source Source CronSpecificDayOfWeek.
 */
export const parseCronSpecificDayOfWeek = (
	source: unknown
): string | undefined =>
	isCronSpecificDayOfWeek(source)
		? `${source.day}#${source.week}`
		: undefined;
