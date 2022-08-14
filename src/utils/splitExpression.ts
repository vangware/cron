/**
 * Splits given string by spaces (even if multiple).
 *
 * @category Common
 * @example
 * ```typescript
 * splitExpression("  1  2   3    4     5 "); // ["1", "2", "3", "4", "5"]
 * splitExpression("1 2 3 4 5"); // ["1", "2", "3", "4", "5"]
 * splitExpression("12345"); // ["12345"]
 * ```
 * @param source string to be parsed.
 * @returns An array with all elements of the given expression.
 */
export const splitExpression = (source: string) => source.trim().split(/[ ]+/u);
