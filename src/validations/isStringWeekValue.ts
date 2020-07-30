/**
 * Check if given value is between 1-5.
 * @param value Value to check.
 */
export const isStringWeekValue = (value: string) => /^[1-5]$/u.test(value);
