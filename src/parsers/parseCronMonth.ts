import { parseCronMonthValue } from "./parseCronMonthValue";
import { parseCronPart } from "./parseCronPart";

/**
 * Parses `CronMonth` into a string.
 * @param source `CronMonth` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronMonth = parseCronPart([0, 12])(parseCronMonthValue);
