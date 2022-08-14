import { isCronLast } from "../validations/isCronLast.js";

/**
 * Parses `CronLast` into a string.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseCronLast("L"); // "L"
 * parseCronLast("💩"); // undefined
 * ```
 * @param source `CronLast` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronLast = (source: string) =>
	isCronLast(source) ? source : undefined;
