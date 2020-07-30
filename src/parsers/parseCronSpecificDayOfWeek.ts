import { CronSpecificDayOfWeek } from "../types/CronSpecificDayOfWeek";
import { isCronSpecificDayOfWeek } from "../validations/isCronSpecificDayOfWeek";

/**
 * Parses given CronSpecificDayOfWeek to string.
 * @param source Source CronSpecificDayOfWeek.
 */
export const parseCronSpecificDayOfWeek = (
	source: CronSpecificDayOfWeek | string
) =>
	isCronSpecificDayOfWeek(source)
		? `${source.day}#${source.week}`
		: undefined;
