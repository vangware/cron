import { isObject, isUndefined } from "@vangware/utils";
import type { CronRange } from "../types/CronRange.js";

/**
 * Check if given is `CronRange`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isCronRange = <Value>(value: unknown): value is CronRange<Value> =>
	isObject(value) &&
	!isUndefined((value as CronRange<Value>).from) &&
	!isUndefined((value as CronRange<Value>).to);
