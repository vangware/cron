import type { CronListItem } from "./CronListItem.js";

/**
 * Cron list (value1,value2,valueN).
 */
export type CronList<Value> = ReadonlyArray<CronListItem<Value>>;
