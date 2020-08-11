import { CronPart } from "../types/CronPart";
import { LimitTuple } from "../types/LimitTuple";
import { StringValueParser } from "../types/StringValueParser";
import { parseCronEvery } from "./parseCronEvery";
import { parseStringList } from "./parseStringList";
import { parseStringRange } from "./parseStringRange";
import { parseStringSteps } from "./parseStringSteps";

/**
 * Parses a string into a `CronPart`.
 * @param limit `LimitTuple` to be used when parsing `CronSteps`.
 * @returns Curried function with `limit` in context.
 */
export const parseStringPart = (limit: LimitTuple) =>
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
