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
 * @category Parser
 * @param limit `LimitTuple` to be used when parsing `CronSteps`.
 * @returns Curried function with `limit` on context.
 */
export const parseCronPart =
	(limit: LimitTuple) =>
	/**
	 * @param parser `CronValueParser` for `CronPart`.
	 * @returns Curried function with `limit` and `parser` in context.
	 */
	<Value>(parser: CronValueParser<Value>) =>
	/**
	 * @param source `CronPart` to be parsed.
	 * @returns A string or `undefined` if invalid.
	 */
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
