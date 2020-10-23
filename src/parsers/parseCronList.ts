import { arrayJoin, arrayMap, isUndefined } from "@vangware/utils";
import { CRON_LIST_SEPARATOR } from "../constants";
import type { CronList } from "../types/CronList";
import type { CronRange } from "../types/CronRange";
import type { CronSteps } from "../types/CronSteps";
import type { CronValueParser } from "../types/CronValueParser";
import type { LimitTuple } from "../types/LimitTuple";
import { isCronList } from "../validations/isCronList";
import { parseCronRange } from "./parseCronRange";
import { parseCronSteps } from "./parseCronSteps";

/**
 * Parses `CronList` into a string.
 * @param limit `LimitTuple` to be used when parsing `CronSteps`.
 * @returns Curried function with `limit` on context.
 */
export const parseCronList = (limit: LimitTuple) =>
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
					parser(value as Value)
			)(isCronList<Value>(source) ? source : []);

			return list.length === 0 || list.some(isUndefined)
				? undefined
				: arrayJoin(CRON_LIST_SEPARATOR)(list);
		};
