/**
 * Splits given string by spaces (even if multiple).
 *
 * @category Util
 * @param source string to be parsed.
 * @returns An array with all elements of the given expression.
 */
export const splitExpression = (source: string) => source.trim().split(/[ ]+/u);
