import { isArray } from "@vangware/utils";
import { CronList } from "../types/CronList";

/**
 * Checks if given value is an array, which means is a CronList.
 * @param value Value to check.
 */
export const isCronList = <Value>(value: unknown): value is CronList<Value> =>
	isArray(value);
