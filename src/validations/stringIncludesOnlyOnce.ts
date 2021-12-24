import { isString } from "@vangware/utils";

/**
 * Checks if given search value appears just onces in given value.
 *
 * @category Validation
 * @param search Value to search.
 * @returns Curried function with `search` in context.
 */
export const stringIncludesOnlyOnce =
	(search: string) =>
	/**
	 * @param value Value to search on.
	 */
	(value: unknown): value is string =>
		isString(value) &&
		value.includes(search) &&
		value.indexOf(search) === value.lastIndexOf(search);
