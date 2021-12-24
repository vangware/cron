import { isArray } from "@vangware/utils";
import type { CronList } from "../types/CronList.js";

/**
 * Check if given is `CronList`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isCronList = <Value>(value: unknown): value is CronList<Value> =>
	isArray(value);
