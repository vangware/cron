import { CronStartOrBlank } from "../types/CronStartOrBlank";
import { isCronStartOrBlank } from "../validations/isCronStartOrBlank";

/**
 * Parse given source string to CronStartOrBlank.
 * @param source Source string to be parsed.
 */
export const parseCronStartOrBlank = (source: CronStartOrBlank | string) =>
	isCronStartOrBlank(source) ? source : undefined;
