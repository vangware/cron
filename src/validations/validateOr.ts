/**
 * Run several validations in the same string, true if any is true.
 * @param validations List of validations.
 * @returns Curried function with `validations` in context.
 */
export const validateOr = (
	validations: readonly ((value: unknown) => boolean)[]
) =>
	/**
	 * @param value Value to check.
	 */
	(value: unknown) => validations.some(validation => validation(value));
