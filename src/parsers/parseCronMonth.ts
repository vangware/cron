import { parseCronMonthValue } from "./parseCronMonthValue.js";
import { parseCronPart } from "./parseCronPart.js";

/**
 * Parses `CronMonth` into a string.
 *
 * @category Parser
 * @param source `CronMonth` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronMonth = parseCronPart([0, 12])(parseCronMonthValue);
