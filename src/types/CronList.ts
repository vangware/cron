import type { ReadOnlyObjectArray } from "@vangware/utils";
import type { CronListItem } from "./CronListItem";

/**
 * Cron list (value1,value2,valueN).
 */
export type CronList<Value> = ReadOnlyObjectArray<CronListItem<Value>>;
