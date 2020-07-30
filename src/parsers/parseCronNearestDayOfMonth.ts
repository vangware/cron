import { CronNearestDayOfMonth } from "../types/CronNearestDayOfMonth";
import { isCronNearestDayOfMonth } from "../validations/isCronNearestDayOfMonth";

/**
 * Parses `CronNearestDayOfMonth` into a string.
 * @param source `CronNearestDayOfMonth` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronNearestDayOfMonth = (source: CronNearestDayOfMonth) =>
	isCronNearestDayOfMonth(source) ? `${source.nearest}W` : undefined;
