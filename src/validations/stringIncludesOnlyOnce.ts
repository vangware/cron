import { isString } from "@vangware/predicates";

/**
 * Checks if given search value appears just onces in given value.
 *
 * @category Predicates
 * @example
 * ```typescript
 * const includesCommaOnce = stringIncludesOnlyOnce(",");
 * includesCommaOnce("value,value"); // true
 * includesCommaOnce("value,value,value"); // false
 * includesCommaOnce("value"); // false
 * ```
 * @param search Value to search.
 * @returns Curried function with `search` in context.
 */
export const stringIncludesOnlyOnce =
	(search: string) =>
	(value: unknown): value is string =>
		isString(value) &&
		value.includes(search) &&
		value.indexOf(search) === value.lastIndexOf(search);
