import { parseStringHoursValue } from "./parseStringHoursValue";
import { parseStringPart } from "./parseStringPart";

/**
 * Parses a string into a `CronHours`.
 * @param source string to be parsed.
 * @returns A `CronHours` or `undefined` if invalid.
 */
export const parseStringHours = parseStringPart([0, 24])(parseStringHoursValue);
