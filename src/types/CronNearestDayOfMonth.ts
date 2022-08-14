import type { CronDayOfMonthValue } from "./CronDayOfMonthValue.js";

/**
 * Nearest day of month object It gets turned into the string `${nearest}W`.
 */
export type CronNearestDayOfMonth = {
	readonly nearest: CronDayOfMonthValue;
};
