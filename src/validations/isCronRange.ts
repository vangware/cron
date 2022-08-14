import { isObject, isUndefined } from "@vangware/predicates";
import type { CronRange } from "../types/CronRange.js";

/**
 * Check if given is `CronRange`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isCronRange({ from: 10, to: 20 }); // true
 * isCronRange({}); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is `CronRange`, `false` otherwise.
 */
export const isCronRange = <Value>(value: unknown): value is CronRange<Value> =>
	isObject(value) &&
	!isUndefined((value as CronRange<Value>).from) &&
	!isUndefined((value as CronRange<Value>).to);
