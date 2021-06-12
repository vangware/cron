import { isUndefined, numberBetween } from "@vangware/utils";
import type { CronEvery } from "../types/CronEvery";
import type { CronRange } from "../types/CronRange";
import type { CronSteps } from "../types/CronSteps";
import type { CronValueParser } from "../types/CronValueParser";
import type { LimitTuple } from "../types/LimitTuple";
import { isCronSteps } from "../validations/isCronSteps";
import { parseCronEvery } from "./parseCronEvery";
import { parseCronRange } from "./parseCronRange";

/**
 * Parses `CronSteps` into a string.
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
