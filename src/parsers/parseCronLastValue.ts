import type { CronLastValue } from "../types/CronLastValue.js";
import { isCronLastValue } from "../validations/isCronLastValue.js";

/**
 * Parses `CronLastValue` into a string.
 *
 * @category Parser
 * @param source `CronLastValue` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronLastValue = (source: CronLastValue) =>
	isCronLastValue(source) ? `${source.last}L` : undefined;
