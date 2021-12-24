import { parseStringMonthValue } from "./parseStringMonthValue.js";
import { parseStringPart } from "./parseStringPart.js";

/**
 * Parses a string into a `CronMonth`.
 *
 * @category Parser
 * @param source string to be parsed.
 * @returns A `CronMonth` or `undefined` if invalid.
 */
export const parseStringMonth = parseStringPart([0, 12])(parseStringMonthValue);
