import { isUndefined } from "@vangware/utils";
import { CronRange } from "../types/CronRange";

/**
 * Check if given is `CronRange`.
 * @param value Value to check.
 */
export const isCronRange = <Value>(value: unknown): value is CronRange<Value> =>
	!isUndefined((value as CronRange<Value>)?.from) &&
	!isUndefined((value as CronRange<Value>)?.to);
