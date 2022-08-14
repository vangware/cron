import type { Maybe } from "@vangware/types";
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
 * @category Parsers
 * @example
 * ```typescript
 * const parseStringPartSeconds = parseStringPart([0, 59])(
 * 	parseStringSecondsValue,
 * );
 *
 * parseStringPartSeconds("*"); // "*"
 * parseStringPartSeconds("13,10"); // [13, 10]
 * parseStringPartSeconds("13-10,10"); // [{ from: 13, to: 10 }, 10]
 * parseStringPartSeconds("13/10,10"); // [{ every: 10, start: 13 }, 10]
 * parseStringPartSeconds("?/10,10"); // [{ every: 10, start: "?" }, 10]
 * parseStringPartSeconds("13/10"); // { every: 10, start: 13 }
 * parseStringPartSeconds("?/10"); // { every: 10, start: "?" }
 * parseStringPartSeconds("13-10"); // { from: 13, to: 10 }
 * ```
 * @param limit `LimitTuple` to be used when parsing `CronSteps`.
 * @returns Curried function with `limit` in context.
 */
export const parseStringPart =
	(limit: LimitTuple) =>
	<Value>(parser: StringValueParser<Value>) =>
	(source: string): Maybe<CronPart<Value>> =>
		parseCronEvery(source) ??
		parseStringList(limit)(parser)(source) ??
		parseStringSteps(limit)(parser)(source) ??
		parseStringRange(parser)(source) ??
		parser(source);
