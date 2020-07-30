import { CronPart } from "../types/CronPart";
import { StringValueParser } from "../types/StringValueParser";
import { parseCronEvery } from "./parseCronEvery";
import { parseStringList } from "./parseStringList";
import { parseStringRange } from "./parseStringRange";
import { parseStringSteps } from "./parseStringSteps";

/**
 * Parses a string into a `CronPart`.
 * @param parser `StringValueParser` for `CronPart`.
 * @returns Curried function with `parser` in context.
 */
export const parseStringPart = <Value>(parser: StringValueParser<Value>) =>
	/**
	 * @param source string to be parsed.
	 * @returns A `CronPart` or `undefined` if invalid.
	 */
	(source: string): CronPart<Value> | undefined =>
		parseCronEvery(source) ??
		parseStringList(parser)(source) ??
		parseStringSteps(parser)(source) ??
		parseStringRange(parser)(source) ??
		parser(source);
