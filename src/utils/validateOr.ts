/**
 * Run several validations in the same string, true if any is true.
 *
 * @category Util
 * @category Validation
 * @param validations List of validations.
 * @returns Curried function with `validations` in context.
 */
export const validateOr =
	(validations: ReadonlyArray<(value: unknown) => boolean>) =>
	/**
	 * @param value Value to check.
	 * @returns Boolean `true` if there are some validations passing,
	 * `false` if none
	 */
	(value: unknown) =>
		validations.some(validation => validation(value));
