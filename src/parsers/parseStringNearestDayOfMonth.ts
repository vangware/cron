import { parseDecimal } from "@vangware/parsers";
import type { CronNearestDayOfMonth } from "../types/CronNearestDayOfMonth.js";
import { isStringNearestDayOfMonth } from "../validations/isStringNearestDayOfMonth.js";

/**
 * Parses a string into a `CronNearestDayOfMonth`.
 *
 * @category Parser
 * @param source string to be parsed.
 * @returns A `CronNearestDayOfMonth` or `undefined` if invalid.
 * @example
 */
export const parseStringNearestDayOfMonth = (source: string) =>
	isStringNearestDayOfMonth(source)
		? ({ nearest: parseDecimal(source) } as CronNearestDayOfMonth)
		: undefined;
