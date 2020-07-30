/**
 * Cron range (from-to).
 */
export type CronRange<Value> = {
	readonly from: Value;
	readonly to: Value;
};
