import { isString, match } from "@vangware/predicates";
import type { CronDayOfWeekValueString } from "../types/CronDayOfWeekValueString.js";

/**
 * Check if given is `CronDayOfWeekValueString`.
 *
 * @category Predicates
 * @example
 * ```typescript
 * isCronDayOfWeekValueString("FRI"); // true
 * isCronDayOfWeekValueString("fri"); // true
 * isCronDayOfWeekValueString("FRIDAY"); // false
 * ```
 * @param value Value to check.
 * @returns Returns `true` if is `CronDayOfWeekValueString`, `false` otherwise.
 */
export const isCronDayOfWeekValueString = (
	value: unknown,
): value is CronDayOfWeekValueString =>
	isString(value) && match(/^(?:SUN|MON|TUE|WED|THU|FRI|SAT)$/iu)(value);
