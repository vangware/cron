import { parseCronPart } from "./parseCronPart.js";
import { parseCronSecondsValue } from "./parseCronSecondsValue.js";

/**
 * Parses `CronSeconds` into a string.
 *
 * @category Parser
 * @param source `CronSeconds` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronSeconds = parseCronPart([0, 59])(parseCronSecondsValue);
