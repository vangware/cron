import { parseStringPart } from "./parseStringPart";
import { parseStringYearValue } from "./parseStringYearValue";

/**
 * Parses a string into a `CronYear`.
 * @param source string to be parsed.
 * @returns A `CronYear` or `undefined` if invalid.
 */
export const parseStringYear = parseStringPart(parseStringYearValue);
