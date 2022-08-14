import { between, isUndefined } from "@vangware/predicates";
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
 * @category Parsers
 * @example
 * ```typescript
 * const parseCronStepsSeconds = parseCronSteps([0, 59])(parseCronSecondsValue);
 *
 * parseCronStepsSeconds({ every: 10, start: 13 }); // "13/10"
 * parseCronStepsSeconds({ every: 99, start: 13 }); // undefined
 * parseCronStepsSeconds({
 * 	every: 10,
 * 	start: { from: 13, to: 10 },
 * }); // "13-10/10"
 * parseCronStepsSeconds({ every: 10, start: "?" }); // "?/10"
 * ```
 * @param limit `LimitTuple` to be used when parsing `CronSteps`.
 * @returns Curried function with `limit` on context.
 */
export const parseCronSteps =
	([minimum, maximum]: LimitTuple) =>
	<Value>(parser: CronValueParser<Value>) =>
	(source: CronSteps<Value>) => {
		const valid = isCronSteps(source);
		const start = valid
			? parseCronEvery(source.start as CronEvery) ??
			  parseCronRange(parser)(source.start as CronRange<Value>) ??
			  parser(source.start as Value)
			: undefined;
		const every =
			valid && between(minimum)(maximum)(source.every)
				? source.every
				: undefined;

		return valid && !isUndefined(start) && !isUndefined(every)
			? `${start}/${every}`
			: undefined;
	};
