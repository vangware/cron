import { join, length, map, some } from "@vangware/iterables";
import { isUndefined } from "@vangware/predicates";
import { CRON_LIST_SEPARATOR } from "../constants.js";
import type { CronList } from "../types/CronList.js";
import type { CronRange } from "../types/CronRange.js";
import type { CronSteps } from "../types/CronSteps.js";
import type { CronValueParser } from "../types/CronValueParser.js";
import type { LimitTuple } from "../types/LimitTuple.js";
import { isCronList } from "../validations/isCronList.js";
import { parseCronRange } from "./parseCronRange.js";
import { parseCronSteps } from "./parseCronSteps.js";

/**
 * Parses `CronList` into a string.
 *
 * @category Parsers
 * @example
 * ```typescript
 * const parseCronSecondsList = parseCronList([0, 59])(parseCronSecondsValue);
 *
 * parseCronSecondsList([13, 10]); // "13,10",
 * parseCronSecondsList([{ from: 13, to: 10 }, 10]); // "13-10,10",
 * parseCronSecondsList([{ every: 10, start: 13 }, 10]); // "13/10,10",
 * parseCronSecondsList([{ every: 10, start: { from: 13, to: 10 } }, 10]); // "13-10/10,10"
 * parseCronSecondsList([{ every: 10, start: "L" }, 10]); // "L/10,10"
 * parseCronSecondsList([]); // undefined
 * ```
 * @param limit `LimitTuple` to be used when parsing `CronSteps`.
 * @returns Curried function with `limit` on context.
 */
export const parseCronList =
	(limit: LimitTuple) =>
	<Value>(parser: CronValueParser<Value>) =>
	(source: CronList<Value>) => {
		const list = map(
			value =>
				parseCronSteps(limit)(parser)(value as CronSteps<Value>) ??
				parseCronRange(parser)(value as CronRange<Value>) ??
				parser(value as Value),
		)(isCronList<Value>(source) ? source : []);

		return length(list) === 0 || some(isUndefined)(list)
			? undefined
			: join(CRON_LIST_SEPARATOR)(list);
	};
