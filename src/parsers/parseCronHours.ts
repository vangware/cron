import { parseCronHoursValue } from "./parseCronHoursValue";
import { parseCronPart } from "./parseCronPart";

/**
 * Parses `CronHours` into a string.
 * @param source `CronHours` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronHours = parseCronPart(parseCronHoursValue);
