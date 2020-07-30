import { CronEvery } from "../types/CronEvery";
import { CronRange } from "../types/CronRange";
import { CronSteps } from "../types/CronSteps";
import { CronValueParser } from "../types/CronValueParser";
import { isCronSteps } from "../validations/isCronSteps";
import { parseCronEvery } from "./parseCronEvery";
import { parseCronRange } from "./parseCronRange";

/**
 * Parses `CronSteps` into a string.
 * @param parser `CronValueParser` for `CronSteps`.
 * @returns Curried function with `parser` in context.
 */
export const parseCronSteps = <Value>(parser: CronValueParser<Value>) =>
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

		return valid && start ? `${start}/${source.every}` : undefined;
	};
