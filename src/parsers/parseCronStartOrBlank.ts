import { isCronStartOrBlank } from "../validations/isCronStartOrBlank.js";

/**
 * Parses `CronStartOrBlank` into a string.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseCronStartOrBlank("?"); // "?"
 * parseCronStartOrBlank("💩"); // undefined
 * ```
 * @param source `CronStartOrBlank` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronStartOrBlank = (source: string) =>
	isCronStartOrBlank(source) ? source : undefined;
