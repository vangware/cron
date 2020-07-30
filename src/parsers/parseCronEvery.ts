import { isCronEvery } from "../validations/isCronEvery";

/**
 * Parses string that might be the "every token".
 * @param source Source string to be parsed.
 */
export const parseCronEvery = (source: unknown) =>
	isCronEvery(source) ? source : undefined;
