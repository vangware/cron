import { parseStringMinutesValue } from "./parseStringMinutesValue";
import { parseStringPart } from "./parseStringPart";

/**
 * Parses a string into a `CronMinutes`.
 * @param source string to be parsed.
 * @returns A `CronMinutes` or `undefined` if invalid.
 */
export const parseStringMinutes = parseStringPart([0, 59])(
	parseStringMinutesValue,
);
