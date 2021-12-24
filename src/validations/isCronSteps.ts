import { isNumber, isObject, isUndefined } from "@vangware/utils";
import type { CronSteps } from "../types/CronSteps.js";

/**
 * Check if given is `CronSteps`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isCronSteps = <Value>(value: unknown): value is CronSteps<Value> =>
	isObject(value) &&
	isNumber((value as CronSteps<Value>).every) &&
	!isUndefined((value as CronSteps<Value>).start);
