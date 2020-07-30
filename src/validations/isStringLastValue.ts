/**
 * Check if given value is "{value}L".
 * @param value Value to check.
 */
export const isStringLastValue = (value: string) => /^[0-7]L$/iu.test(value);
