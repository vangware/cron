import type { CronDayOfMonthValue } from "./CronDayOfMonthValue.js";

/**
 * Nearest day of month ({nearest}W).
 */
export type CronNearestDayOfMonth = {
	readonly nearest: CronDayOfMonthValue;
};
