import { isNumber, isUndefined } from "@vangware/utils";
import { CronSteps } from "../types/CronSteps";

/**
 * Checks if given value is a CronSteps.
 */
export const isCronSteps = <Value>(value: unknown): value is CronSteps<Value> =>
	isNumber((value as CronSteps<Value>)?.every) &&
	!isUndefined((value as CronSteps<Value>)?.start);
