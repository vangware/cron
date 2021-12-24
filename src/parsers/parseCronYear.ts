import { parseCronPart } from "./parseCronPart.js";
import { parseCronYearValue } from "./parseCronYearValue.js";

/**
 * Parses `CronYear` into a string.
 *
 * @category Parser
 * @param source `CronYear` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronYear = parseCronPart([0, 129])(parseCronYearValue);
