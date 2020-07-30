import { CronLastValue } from "../types/CronLastValue";
import { isCronLastValue } from "../validations/isCronLastValue";

/**
 * Parses `CronLastValue` into a string.
 * @param source `CronLastValue` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronLastValue = (source: CronLastValue) =>
	isCronLastValue(source) ? `${source.last}L` : undefined;
