import { parseDecimal } from "@vangware/parsers";
import type { CronNearestDayOfMonth } from "../types/CronNearestDayOfMonth.js";
import { isStringNearestDayOfMonth } from "../validations/isStringNearestDayOfMonth.js";

/**
 * Parses a string into a `CronNearestDayOfMonth`.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseStringNearestDayOfMonth("2W"); // { nearest: 2 }
 * parseStringNearestDayOfMonth("INVALID"); // undefined
 * ```
 * @param source string to be parsed.
 * @returns A `CronNearestDayOfMonth` or `undefined` if invalid.
 */
export const parseStringNearestDayOfMonth = (source: string) =>
	isStringNearestDayOfMonth(source)
		? ({ nearest: parseDecimal(source) } as CronNearestDayOfMonth)
		: undefined;
