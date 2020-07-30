import { CronStartOrBlank } from "../types/CronStartOrBlank";
import { isCronStartOrBlank } from "../validations/isCronStartOrBlank";

/**
 * Parses `CronStartOrBlank` into a string.
 * @param source `CronStartOrBlank` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronStartOrBlank = (source: CronStartOrBlank | string) =>
	isCronStartOrBlank(source) ? source : undefined;
