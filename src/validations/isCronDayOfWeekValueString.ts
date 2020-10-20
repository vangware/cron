import { isString, stringTest } from "@vangware/utils";
import { CronDayOfWeekValueString } from "../types/CronDayOfWeekValueString";

/**
 * Check if given is `CronDayOfWeekValueString`.
 * @param value Value to check.
 */
export const isCronDayOfWeekValueString = (
	value: unknown
): value is CronDayOfWeekValueString =>
	isString(value) && stringTest(/^(?:SUN|MON|TUE|WED|THU|FRI|SAT)$/iu)(value);
