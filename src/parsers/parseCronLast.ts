import { CronLast } from "../types/CronLast";
import { isCronLast } from "../validations/isCronLast";

/**
 * Parses `CronLast` into a string.
 * @param source `CronLast` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronLast = (source: CronLast | string) =>
	isCronLast(source) ? source : undefined;
