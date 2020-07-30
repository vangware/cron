import { parseStringPart } from "./parseStringPart";
import { parseStringYearValue } from "./parseStringYearValue";

/**
 * Parses given source string to CronYear.
 * @param source Source string to be parsed.
 */
export const parseStringYear = parseStringPart(parseStringYearValue);
