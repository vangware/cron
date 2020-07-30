import { CronEvery } from "../types/CronEvery";
import { isCronEvery } from "../validations/isCronEvery";

/**
 * Parses string that might be the "every token".
 * @param source Source string to be parsed.
 */
export const parseCronEvery = (source: CronEvery | string) =>
	isCronEvery(source) ? source : undefined;
