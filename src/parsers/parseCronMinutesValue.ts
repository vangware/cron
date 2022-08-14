import type { Maybe } from "@vangware/types";
import { isCronMinutesValue } from "../index.js";
import type { CronMinutesValue } from "../types/CronMinutesValue.js";

/**
 * Parses `CronMinutesValue` into a string.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseCronMinutesValue(0); // "0"
 * parseCronMinutesValue(59); // "59"
 * ```
 * @param source `CronMinutesValue` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronMinutesValue = <Source extends number>(source: Source) =>
	(isCronMinutesValue(source)
		? `${source}`
		: undefined) as Source extends CronMinutesValue
		? `${Source}`
		: Maybe<`${CronMinutesValue}`>;
