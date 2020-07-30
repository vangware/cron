import { CronEvery } from "../types/CronEvery";
import { CronList } from "../types/CronList";
import { CronRange } from "../types/CronRange";
import { CronSteps } from "../types/CronSteps";
import { CronValueParser } from "../types/CronValueParser";
import { parseCronEvery } from "./parseCronEvery";
import { parseCronList } from "./parseCronList";
import { parseCronRange } from "./parseCronRange";
import { parseCronSteps } from "./parseCronSteps";

/**
 * Parses `CronPart` into a string.
 * @param parser `CronValueParser` for `CronPart`.
 * @returns Curried function with `parser` in context.
 */
export const parseCronPart = <Value>(parser: CronValueParser<Value>) =>
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
		parseCronList(parser)(source as CronList<Value>) ??
		parseCronSteps(parser)(source as CronSteps<Value>) ??
		parseCronRange(parser)(source as CronRange<Value>) ??
		parser(source as Value);
