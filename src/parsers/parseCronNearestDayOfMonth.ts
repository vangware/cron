import type { CronNearestDayOfMonth } from "../types/CronNearestDayOfMonth.js";
import { isCronNearestDayOfMonth } from "../validations/isCronNearestDayOfMonth.js";

/**
 * Parses `CronNearestDayOfMonth` into a string.
 *
 * @category Parser
 * @param source `CronNearestDayOfMonth` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronNearestDayOfMonth = (source: CronNearestDayOfMonth) =>
	isCronNearestDayOfMonth(source) ? `${source.nearest}W` : undefined;
