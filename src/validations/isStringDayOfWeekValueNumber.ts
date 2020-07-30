/**
 * Check if given value is between 0-7.
 * @param value Value to check.
 */
export const isStringDayOfWeekValueNumber = (value: string) =>
	/^[0-7]$/u.test(value);
