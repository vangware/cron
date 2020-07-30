import { arrayMap } from "@vangware/utils";
import { CRON_LIST_SEPARATOR } from "../constants";
import { CronListItem } from "../types/CronListItem";
import { isCronList } from "../validations/isCronList";
import { parseCronRange } from "./parseCronRange";
import { parseCronSteps } from "./parseCronSteps";

/**
 * Takes a string parser and then a source string  and turns it into a CronList
 * array (or undefined if is invalid).
 * @param source Source string to be parsed.
 */
export const parseCronList = <Value>(source: unknown) => {
	const list = arrayMap<CronListItem<Value>, string>(
		value => parseCronSteps(value) ?? parseCronRange(value) ?? `${value}`
	)(isCronList<Value>(source) ? source : []).join(CRON_LIST_SEPARATOR);

	return list.length === 0 ? undefined : list;
};
