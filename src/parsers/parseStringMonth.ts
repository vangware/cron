import { parseStringMonthValue } from "./parseStringMonthValue";
import { parseStringPart } from "./parseStringPart";

/**
 * Parses a string into a `CronMonth`.
 * @param source string to be parsed.
 * @returns A `CronMonth` or `undefined` if invalid.
 */
export const parseStringMonth = parseStringPart(parseStringMonthValue);
