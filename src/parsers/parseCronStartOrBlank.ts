import type { CronStartOrBlank } from "../types/CronStartOrBlank.js";
import { isCronStartOrBlank } from "../validations/isCronStartOrBlank.js";

/**
 * Parses `CronStartOrBlank` into a string.
 *
 * @category Parser
 * @param source `CronStartOrBlank` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronStartOrBlank = (source: CronStartOrBlank | string) =>
	isCronStartOrBlank(source) ? source : undefined;
