import { CronLast } from "../types/CronLast";
import { isCronLast } from "../validations/isCronLast";

/**
 * Parse given source string to ParseLast.
 * @param source Source string to be parsed.
 */
export const parseCronLast = (source: CronLast | string) =>
	isCronLast(source) ? source : undefined;
