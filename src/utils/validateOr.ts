/**
 * Run several validations in the same string, true if any is true.
 *
 * @category Common
 * @example
 * ```typescript
 * validateOr([])("1"); // false
 *
 * validateOr([
 * 	item => item === "1",
 * 	item => parseInt(item as string, 10) === 1,
 * ])("1"); // true
 *
 * validateOr([
 * 	item => item === "1",
 * 	item => parseInt(item as string, 10) === 2,
 * ])("1"); // true
 *
 * validateOr([
 * 	item => item === "2",
 * 	item => parseInt(item as string, 10) === 2,
 * ])("1"); // false
 * ```
 * @param validations List of validations.
 * @returns Curried function with `validations` in context.
 */
export const validateOr =
	(validations: ReadonlyArray<(value: unknown) => boolean>) =>
	(value: unknown) =>
		validations.some(validation => validation(value));
