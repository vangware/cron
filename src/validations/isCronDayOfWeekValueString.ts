import { isString, stringTest } from "@vangware/utils";
import type { CronDayOfWeekValueString } from "../types/CronDayOfWeekValueString.js";

/**
 * Check if given is `CronDayOfWeekValueString`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isCronDayOfWeekValueString = (
	value: unknown,
): value is CronDayOfWeekValueString =>
	isString(value) && stringTest(/^(?:SUN|MON|TUE|WED|THU|FRI|SAT)$/iu)(value);
