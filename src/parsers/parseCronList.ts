import { arrayJoin, arrayMap, isUndefined } from "@vangware/utils";
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
 * @category Parser
 * @param limit `LimitTuple` to be used when parsing `CronSteps`.
 * @returns Curried function with `limit` on context.
 */
export const parseCronList =
	(limit: LimitTuple) =>
	/**
	 * @param parser `CronValuerParser` to parse `CronLists`.
	 * @returns Curried function with `limit` and `parser` on context.
	 */
	<Value>(parser: CronValueParser<Value>) =>
	/**
	 * @param source `CronList` to be parsed.
	 * @returns A string or `undefined` if invalid.
	 */
	(source: CronList<Value>) => {
		const list = arrayMap(
			value =>
				parseCronSteps(limit)(parser)(value as CronSteps<Value>) ??
				parseCronRange(parser)(value as CronRange<Value>) ??
				parser(value as Value),
		)(isCronList<Value>(source) ? source : []);

		return list.length === 0 || list.some(isUndefined)
			? undefined
			: arrayJoin(CRON_LIST_SEPARATOR)(list);
	};
