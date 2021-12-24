import { parseStringHoursValue } from "./parseStringHoursValue.js";
import { parseStringPart } from "./parseStringPart.js";

/**
 * Parses a string into a `CronHours`.
 *
 * @category Parser
 * @param source string to be parsed.
 * @returns A `CronHours` or `undefined` if invalid.
 */
export const parseStringHours = parseStringPart([0, 24])(parseStringHoursValue);
