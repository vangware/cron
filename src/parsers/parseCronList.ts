import { arrayMap, isUndefined } from "@vangware/utils";
import { CRON_LIST_SEPARATOR } from "../constants";
import { CronList } from "../types/CronList";
import { CronRange } from "../types/CronRange";
import { CronSteps } from "../types/CronSteps";
import { CronValueParser } from "../types/CronValueParser";
import { isCronList } from "../validations/isCronList";
import { parseCronRange } from "./parseCronRange";
import { parseCronSteps } from "./parseCronSteps";

/**
 * Parses `CronList` into a string.
 * @param parser `CronValuerParser` to parse `CronLists`.
 * @returns Curried function with `parser` on context.
 */
export const parseCronList = <Value>(parser: CronValueParser<Value>) =>
	/**
	 * @param source `CronList` to be parsed.
	 * @returns A string or `undefined` if invalid.
	 */
	(source: CronList<Value>) => {
		const list = arrayMap(
			value =>
				parseCronSteps(parser)(value as CronSteps<Value>) ??
				parseCronRange(parser)(value as CronRange<Value>) ??
				parser(value as Value)
		)(isCronList<Value>(source) ? source : []);

		return list.length === 0 || list.some(isUndefined)
			? undefined
			: list.join(CRON_LIST_SEPARATOR);
	};
