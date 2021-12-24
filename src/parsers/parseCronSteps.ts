import { isUndefined, numberBetween } from "@vangware/utils";
import type { CronEvery } from "../types/CronEvery.js";
import type { CronRange } from "../types/CronRange.js";
import type { CronSteps } from "../types/CronSteps.js";
import type { CronValueParser } from "../types/CronValueParser.js";
import type { LimitTuple } from "../types/LimitTuple.js";
import { isCronSteps } from "../validations/isCronSteps.js";
import { parseCronEvery } from "./parseCronEvery.js";
import { parseCronRange } from "./parseCronRange.js";

/**
 * Parses `CronSteps` into a string.
 *
 * @category Parser
 * @param limit `LimitTuple` to be used when parsing `CronSteps`.
 * @returns Curried function with `limit` on context.
 */
export const parseCronSteps =
	([minimum, maximum]: LimitTuple) =>
	/**
	 * @param parser `CronValueParser` for `CronSteps`.
	 * @returns Curried function with `limit` and `parser` in context.
	 */
	<Value>(parser: CronValueParser<Value>) =>
	/**
	 * @param source `CronSteps` to be parsed.
	 * @returns A string or `undefined` if invalid.
	 */
	(source: CronSteps<Value>) => {
		const valid = isCronSteps(source);
		const start = valid
			? parseCronEvery(source.start as CronEvery) ??
			  parseCronRange(parser)(source.start as CronRange<Value>) ??
			  parser(source.start as Value)
			: undefined;
		const every =
			valid && numberBetween(minimum)(maximum)(source.every)
				? source.every
				: undefined;

		return valid && !isUndefined(start) && !isUndefined(every)
			? `${start}/${every}`
			: undefined;
	};
