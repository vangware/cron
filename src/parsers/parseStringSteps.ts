import { isNumber, isUndefined, stringParseDecimal } from "@vangware/utils";
import { CRON_STEPS_SEPARATOR } from "../constants";
import { CronSteps } from "../types/CronSteps";
import { StringValueParser } from "../types/StringValueParser";
import { isStringSteps } from "../validations/isStringSteps";
import { parseCronEvery } from "./parseCronEvery";
import { parseStringRange } from "./parseStringRange";

/**
 * Takes a string parser and then a source `start/every` string and turns it
 * into a CronSteps object (or undefined if is invalid).
 * @param parser Value parser.
 */
export const parseStringSteps = <Value>(parser: StringValueParser<Value>) =>
	/**
	 * @param source Source string.
	 */
	(source: string): CronSteps<Value> | undefined => {
		const valid = isStringSteps(source);
		const [startString, everyString] = valid
			? source.split(CRON_STEPS_SEPARATOR)
			: [];
		const every = stringParseDecimal(everyString);
		const start = valid
			? parseCronEvery(startString) ??
			  parseStringRange<Value>(parser)(startString) ??
			  parser(startString)
			: undefined;

		return valid &&
			!isUndefined(every) &&
			!isUndefined(start) &&
			(!isNumber(start) || (isNumber(start) && !isNaN(start)))
			? { every, start }
			: undefined;
	};
