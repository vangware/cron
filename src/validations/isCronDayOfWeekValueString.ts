import { isString } from "@vangware/utils";
import { CronDayOfWeekValueString } from "../types/CronDayOfWeekValueString";

/**
 * Check if given value is between SUN-SAT.
 * @param value Value to check.
 */
export const isCronDayOfWeekValueString = (
	value: unknown
): value is CronDayOfWeekValueString =>
	isString(value) && /^(?:SUN|MON|TUE|WED|THU|FRI|SAT)$/iu.test(value);
