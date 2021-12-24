import { parseStringPart } from "./parseStringPart.js";
import { parseStringYearValue } from "./parseStringYearValue.js";

/**
 * Parses a string into a `CronYear`.
 *
 * @category Parser
 * @param source string to be parsed.
 * @returns A `CronYear` or `undefined` if invalid.
 */
export const parseStringYear = parseStringPart([0, 129])(parseStringYearValue);
