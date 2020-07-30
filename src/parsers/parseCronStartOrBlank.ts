import { isCronStartOrBlank } from "../validations/isCronStartOrBlank";

/**
 * Parse given source string to CronStartOrBlank.
 * @param source Source string to be parsed.
 */
export const parseCronStartOrBlank = (source: unknown) =>
	isCronStartOrBlank(source) ? source : undefined;
