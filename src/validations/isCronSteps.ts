import { isNumber, isObject, isUndefined } from "@vangware/predicates";
import type { CronSteps } from "../types/CronSteps.js";

/**
 * Check if given is `CronSteps`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isCronSteps({ every: 10, start: "value" }); // true
 * isCronSteps({ every: "invalid" }); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is `CronSteps`, `false` otherwise.
 */
export const isCronSteps = <Value>(value: unknown): value is CronSteps<Value> =>
	isObject(value) &&
	isNumber((value as CronSteps<Value>).every) &&
	!isUndefined((value as CronSteps<Value>).start);
