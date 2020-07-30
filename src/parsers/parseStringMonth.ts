import { parseStringMonthValue } from "./parseStringMonthValue";
import { parseStringPart } from "./parseStringPart";

/**
 * Parses given source string to CronMonth.
 * @param source Source string to be parsed.
 */
export const parseStringMonth = parseStringPart(parseStringMonthValue);
