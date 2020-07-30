/**
 * Check if given value is between 1 and 12.
 * @param value Value to check.
 */
export const isStringMonthValueNumber = (value: string) =>
	/^(?:[1-9]|1[0-2])$/u.test(value);
