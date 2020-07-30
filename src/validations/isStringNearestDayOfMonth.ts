/**
 * Check if given value is "{value}W".
 * @param value Value to check.
 */
export const isStringNearestDayOfMonth = (value: string) =>
	/^(?:[1-9]|[12][0-9]|3[01])W$/iu.test(value);
