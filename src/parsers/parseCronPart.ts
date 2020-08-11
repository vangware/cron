import { CronEvery } from "../types/CronEvery";
import { CronList } from "../types/CronList";
import { CronRange } from "../types/CronRange";
import { CronSteps } from "../types/CronSteps";
import { CronValueParser } from "../types/CronValueParser";
import { LimitTuple } from "../types/LimitTuple";
import { parseCronEvery } from "./parseCronEvery";
import { parseCronList } from "./parseCronList";
import { parseCronRange } from "./parseCronRange";
import { parseCronSteps } from "./parseCronSteps";

/**
 * Parses `CronPart` into a string.
 * @param limit `LimitTuple` to be used when parsing `CronSteps`.
 * @returns Curried function with `limit` on context.
 */
export const parseCronPart = (limit: LimitTuple) =>
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
				| CronSteps<Value>
				| CronRange<Value>
				| Value
		) =>
			parseCronEvery(source as CronEvery) ??
			parseCronList(limit)(parser)(source as CronList<Value>) ??
			parseCronSteps(limit)(parser)(source as CronSteps<Value>) ??
			parseCronRange(parser)(source as CronRange<Value>) ??
			parser(source as Value);
