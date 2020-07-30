import { isCronNearestDayOfMonth } from "../validations/isCronNearestDayOfMonth";

/**
 * Parse given CronNearestDayOfMonth to string.
 * @param source Source CronNearestDayOfMonth.
 */
export const parseCronNearestDayOfMonth = (source: unknown) =>
	isCronNearestDayOfMonth(source) ? `${source.nearest}W` : undefined;
