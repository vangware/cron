import { parseStringMinutesValue } from "./parseStringMinutesValue";
import { parseStringPart } from "./parseStringPart";

/**
 * Parses given source string to CronMinutes.
 * @param source Source string to be parsed.
 */
export const parseStringMinutes = parseStringPart(parseStringMinutesValue);
