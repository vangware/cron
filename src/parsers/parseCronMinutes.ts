import { parseCronMinutesValue } from "./parseCronMinutesValue.js";
import { parseCronPart } from "./parseCronPart.js";

/**
 * Parses `CronMinutes` into a string.
 *
 * @category Parser
 * @param source `CronMinutes` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronMinutes = parseCronPart([0, 59])(parseCronMinutesValue);
