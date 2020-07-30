/**
 * Check if given value is "{day}#{week}".
 * @param value Value to check.
 */
export const isStringSpecificDayOfWeek = (value: string) =>
	/^[1-7]#[1-5]$/u.test(value);
