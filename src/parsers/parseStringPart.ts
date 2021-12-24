import type { CronPart } from "../types/CronPart.js";
import type { LimitTuple } from "../types/LimitTuple.js";
import type { StringValueParser } from "../types/StringValueParser.js";
import { parseCronEvery } from "./parseCronEvery.js";
import { parseStringList } from "./parseStringList.js";
import { parseStringRange } from "./parseStringRange.js";
import { parseStringSteps } from "./parseStringSteps.js";

/**
 * Parses a string into a `CronPart`.
 *
 * @category Parser
 * @param limit `LimitTuple` to be used when parsing `CronSteps`.
 * @returns Curried function with `limit` in context.
 */
export const parseStringPart =
	(limit: LimitTuple) =>
	/**
	 * @param parser `StringValueParser` for `CronPart`.
	 * @returns Curried function with `limit` and `parser` in context.
	 */
	<Value>(parser: StringValueParser<Value>) =>
	/**
	 * @param source string to be parsed.
	 * @returns A `CronPart` or `undefined` if invalid.
	 */
	(source: string): CronPart<Value> | undefined =>
		parseCronEvery(source) ??
		parseStringList(limit)(parser)(source) ??
		parseStringSteps(limit)(parser)(source) ??
		parseStringRange(parser)(source) ??
		parser(source);
