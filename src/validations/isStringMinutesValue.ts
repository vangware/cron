/**
 * Check if given value is between 0 and 59.
 * @param value Value to check.
 */
export const isStringMinutesValue = (value: string) =>
	/^(?:[0-9]|[1-4][0-9]|5[0-9])$/u.test(value);
