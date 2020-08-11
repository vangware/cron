import { parseStringPart } from "./parseStringPart";
import { parseStringSecondsValue } from "./parseStringSecondsValue";

/**
 * Parses a string into a `CronSeconds`.
 * @param source string to be parsed.
 * @returns A `CronSeconds` or `undefined` if invalid.
 */
export const parseStringSeconds = parseStringPart([0, 59])(
	parseStringSecondsValue
);
