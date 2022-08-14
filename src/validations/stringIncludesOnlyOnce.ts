import { isString } from "@vangware/predicates";

/**
 * Checks if given search value appears just onces in given value.
 *
 * @category Validation
 * @param search Value to search.
 * @returns Curried function with `search` in context.
 * @example
 */
export const stringIncludesOnlyOnce =
	(search: string) =>
	(value: unknown): value is string =>
		isString(value) &&
		value.includes(search) &&
		value.indexOf(search) === value.lastIndexOf(search);
