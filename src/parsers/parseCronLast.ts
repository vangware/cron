import type { CronLast } from "../types/CronLast.js";
import { isCronLast } from "../validations/isCronLast.js";

/**
 * Parses `CronLast` into a string.
 *
 * @category Parser
 * @param source `CronLast` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronLast = (source: CronLast | string) =>
	isCronLast(source) ? source : undefined;
