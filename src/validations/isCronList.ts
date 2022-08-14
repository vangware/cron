import { isArray } from "@vangware/predicates";
import type { CronList } from "../types/CronList.js";

/**
 * Check if given is `CronList`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isCronList(["value", "value", "value"]); // true
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is `CronList`, `false` otherwise.
 */
export const isCronList = isArray as <Value>(
	value: unknown,
) => value is CronList<Value>;
