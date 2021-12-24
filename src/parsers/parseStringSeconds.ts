import { parseStringPart } from "./parseStringPart.js";
import { parseStringSecondsValue } from "./parseStringSecondsValue.js";

/**
 * Parses a string into a `CronSeconds`.
 *
 * @category Parser
 * @param source string to be parsed.
 * @returns A `CronSeconds` or `undefined` if invalid.
 */
export const parseStringSeconds = parseStringPart([0, 59])(
	parseStringSecondsValue,
);
