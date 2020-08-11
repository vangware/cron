import { parseCronPart } from "./parseCronPart";
import { parseCronYearValue } from "./parseCronYearValue";

/**
 * Parses `CronYear` into a string.
 * @param source `CronYear` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronYear = parseCronPart([0, 129])(parseCronYearValue);
