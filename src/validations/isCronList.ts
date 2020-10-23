import { isArray } from "@vangware/utils";
import type { CronList } from "../types/CronList";

/**
 * Check if given is `CronList`.
 * @param value Value to check.
 */
export const isCronList = <Value>(value: unknown): value is CronList<Value> =>
	isArray(value);
