import { isNumber, isUndefined } from "@vangware/utils";
import { CronSteps } from "../types/CronSteps";

/**
 * Check if given is `CronSteps`.
 * @param value Value to check.
 */
export const isCronSteps = <Value>(value: unknown): value is CronSteps<Value> =>
	isNumber((value as CronSteps<Value>)?.every) &&
	!isUndefined((value as CronSteps<Value>)?.start);
