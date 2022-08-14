import type { CronEvery } from "../types/CronEvery.js";
import type { CronList } from "../types/CronList.js";
import type { CronRange } from "../types/CronRange.js";
import type { CronSteps } from "../types/CronSteps.js";
import type { CronValueParser } from "../types/CronValueParser.js";
import type { LimitTuple } from "../types/LimitTuple.js";
import { parseCronEvery } from "./parseCronEvery.js";
import { parseCronList } from "./parseCronList.js";
import { parseCronRange } from "./parseCronRange.js";
import { parseCronSteps } from "./parseCronSteps.js";

/**
 * Parses `CronPart` into a string.
 *
 * @example
 * ```typescript
 * const parseCronPartSeconds = parseCronPart([0, 59])(parseCronSecondsValue);
 *
 * parseCronPartSeconds("*"); // "*"
 * parseCronPartSeconds([13, 10]); // "13,10"
 * parseCronPartSeconds([{ from: 13, to: 10 }, 10]); // "13-10,10"
 * parseCronPartSeconds([{ every: 10, start: 13 }, 10]); // "13/10,10"
 * parseCronPartSeconds([{ every: 99, start: 13 }, 10]); // undefined
 * parseCronPartSeconds([{
 * 	every: 10,
 * 	start: { from: 13, to: 10 } }, 10
 * ]); // "13-10/10,10"
 * parseCronPartSeconds([{ every: 10, start: "?" }, 10]); // "?/10,10"
 * parseCronPartSeconds({ every: 10, start: 13 }); // "13/10"
 * parseCronPartSeconds({
 * 	every: 10,
 * 	start: { from: 13, to: 10 },
 * }); // "13-10/10"
 * parseCronPartSeconds({ every: 10, start: "?" }); // "?/10"
 * parseCronPartSeconds({
 * 	from: 13,
 * 	to: 10,
 * }); // "13-10"
 * ```
 * @category Parsers
 * @param limit `LimitTuple` to be used when parsing `CronSteps`.
 * @returns Curried function with `limit` on context.
 */
export const parseCronPart =
	(limit: LimitTuple) =>
	<Value>(parser: CronValueParser<Value>) =>
	(
		source:
			| CronEvery
			| CronList<Value>
			| CronRange<Value>
			| CronSteps<Value>
			| Value,
	) =>
		parseCronEvery(source as CronEvery) ??
		parseCronList(limit)(parser)(source as CronList<Value>) ??
		parseCronSteps(limit)(parser)(source as CronSteps<Value>) ??
		parseCronRange(parser)(source as CronRange<Value>) ??
		parser(source as Value);
