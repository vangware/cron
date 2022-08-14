import { isCronEvery } from "../validations/isCronEvery.js";

/**
 * Parses a `CronEvery` into a string.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseCronEvery("*"); // "*"
 * parseCronEvery("💩"); // undefined
 * ```
 * @param source `CronEvery` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronEvery = (source: string) =>
	isCronEvery(source) ? source : undefined;
