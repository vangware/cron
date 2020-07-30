import { parseStringHoursValue } from "./parseStringHoursValue";
import { parseStringPart } from "./parseStringPart";

/**
 * Parses given source string to CronHours.
 * @param source Source string to be parsed.
 */
export const parseStringHours = parseStringPart(parseStringHoursValue);
