import { isString, match } from "@vangware/predicates";
import type { CronDayOfWeekValueString } from "../types/CronDayOfWeekValueString.js";

/**
 * Check if given is `CronDayOfWeekValueString`.
 *
 * @category Validation
 * @param value Value to check.
 * @example
 */
export const isCronDayOfWeekValueString = (
	value: unknown,
): value is CronDayOfWeekValueString =>
	isString(value) && match(/^(?:SUN|MON|TUE|WED|THU|FRI|SAT)$/iu)(value);
