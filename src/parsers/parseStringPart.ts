import { CronPart } from "../types/CronPart";
import { StringValueParser } from "../types/StringValueParser";
import { parseCronEvery } from "./parseCronEvery";
import { parseStringList } from "./parseStringList";
import { parseStringRange } from "./parseStringRange";
import { parseStringSteps } from "./parseStringSteps";

/**
 * Parses string part with given parser.
 * @param parser Parser to be used.
 */
export const parseStringPart = <Value>(parser: StringValueParser<Value>) =>
	/**
	 * @param source Source string to be parsed.
	 */
	(source: string): CronPart<Value> | undefined =>
		parseCronEvery(source) ??
		parseStringList(parser)(source) ??
		parseStringSteps(parser)(source) ??
		parseStringRange(parser)(source) ??
		parser(source);
