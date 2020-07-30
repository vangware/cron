import { parseStringPart } from "./parseStringPart";
import { parseStringSecondsValue } from "./parseStringSecondsValue";

/**
 * Parses given source string to CronSeconds.
 * @param source Source string to be parsed.
 */
export const parseStringSeconds = parseStringPart(parseStringSecondsValue);
