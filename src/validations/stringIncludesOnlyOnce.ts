/**
 * Checks if given search value appears just onces in given value.
 * @param search Value to search.
 * @returns Curried function with `search` in context.
 */
export const stringIncludesOnlyOnce = (search: string) =>
	/**
	 * @param value Value to search on.
	 */
	(value: string) =>
		value.includes(search) &&
		value.indexOf(search) === value.lastIndexOf(search);
