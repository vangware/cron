import { CronDayOfMonth } from "./CronDayOfMonth";
import { CronDayOfWeek } from "./CronDayOfWeek";
import { CronHours } from "./CronHours";
import { CronMinutes } from "./CronMinutes";
import { CronMonth } from "./CronMonth";
import { CronSeconds } from "./CronSeconds";
import { CronYear } from "./CronYear";

/**
 * Cron expression parts with optional values.
 */
export type CronOptional = {
	readonly seconds?: CronSeconds;
	readonly minutes: CronMinutes;
	readonly hours: CronHours;
	readonly dayOfMonth: CronDayOfMonth;
	readonly month: CronMonth;
	readonly dayOfWeek: CronDayOfWeek;
	readonly year?: CronYear;
};
