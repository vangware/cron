import { parseCronMinutesValue } from "./parseCronMinutesValue";
import { parseCronPart } from "./parseCronPart";

/**
 * Parses `CronMinutes` into a string.
 * @param source `CronMinutes` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronMinutes = parseCronPart(parseCronMinutesValue);
