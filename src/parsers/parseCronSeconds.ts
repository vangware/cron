import { parseCronPart } from "./parseCronPart";
import { parseCronSecondsValue } from "./parseCronSecondsValue";

/**
 * Parses `CronSeconds` into a string.
 * @param source `CronSeconds` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronSeconds = parseCronPart([0, 59])(parseCronSecondsValue);
