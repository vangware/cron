import { parseStringMinutesValue } from "./parseStringMinutesValue.js";
import { parseStringPart } from "./parseStringPart.js";

/**
 * Parses a string into a `CronMinutes`.
 *
 * @category Parser
 * @param source string to be parsed.
 * @returns A `CronMinutes` or `undefined` if invalid.
 */
export const parseStringMinutes = parseStringPart([0, 59])(
	parseStringMinutesValue,
);
