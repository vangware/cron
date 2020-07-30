import { isCronLast } from "../validations/isCronLast";

/**
 * Parse given source string to ParseLast.
 * @param source Source string to be parsed.
 */
export const parseCronLast = (source: unknown) =>
	isCronLast(source) ? source : undefined;
