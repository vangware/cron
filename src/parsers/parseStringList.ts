import { arrayMap, ReadOnlyObject } from "@vangware/utils";
import { CRON_LIST_SEPARATOR } from "../constants";
import { CronList } from "../types/CronList";
import { CronListItem } from "../types/CronListItem";
import { StringValueParser } from "../types/StringValueParser";
import { isStringList } from "../validations/isStringList";
import { parseStringRange } from "./parseStringRange";
import { parseStringSteps } from "./parseStringSteps";

/**
 * Takes a string parser and then a source string  and turns it into a CronList
 * array (or undefined if is invalid).
 * @param parser Value parser.
 */
export const parseStringList = <Value>(parser: StringValueParser<Value>) =>
	/**
	 * @param source Source string to be parsed.
	 */
	(source: string) => {
		const list = arrayMap<string, CronListItem<Value> | undefined>(
			value =>
				(parseStringSteps(parser)(value) ??
					parseStringRange<Value>(parser)(value) ??
					parser(value)) as ReadOnlyObject<
					CronListItem<Value> | undefined
				>
		)(isStringList(source) ? source.split(CRON_LIST_SEPARATOR) : []);

		return list.length === 0 || list.some(item => item === undefined)
			? undefined
			: (list as CronList<Value>);
	};
