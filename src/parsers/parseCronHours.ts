import { parseCronHoursValue } from "./parseCronHoursValue.js";
import { parseCronPart } from "./parseCronPart.js";

/**
 * Parses `CronHours` into a string.
 *
 * @category Parser
 * @param source `CronHours` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronHours = parseCronPart([0, 24])(parseCronHoursValue);
