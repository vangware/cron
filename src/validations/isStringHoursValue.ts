/**
 * Check if given value is between 0-23.
 * @param value Value to check.
 */
export const isStringHoursValue = (value: string) =>
	/^(?:[0-9]|1[0-9]|2[0-3])$/u.test(value);
