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
 * Takes a string parser and then a source string  and turns it into a CronList
 * array (or undefined if is invalid).
 * @param source Source string to be parsed.
 */
export const parseCronList = <Value>(parser: CronValueParser<Value>) =>
	/**
	 * @param source Source string to be parsed.
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
