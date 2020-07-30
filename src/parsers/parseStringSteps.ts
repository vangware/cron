import { isNumber, isUndefined, stringParseDecimal } from "@vangware/utils";
import { CRON_STEPS_SEPARATOR } from "../constants";
import { CronSteps } from "../types/CronSteps";
import { StringValueParser } from "../types/StringValueParser";
import { isStringSteps } from "../validations/isStringSteps";
import { parseCronEvery } from "./parseCronEvery";
import { parseStringRange } from "./parseStringRange";

/**
 * Parses a string into a `CronSteps`.
 * @param parser `StringValueParser` for `CronSteps`.
 * @returns Curried function with `parser` in context.
 */
export const parseStringSteps = <Value>(parser: StringValueParser<Value>) =>
	/**
	 * @param source string to be parsed.
	 * @returns A `CronSteps` or `undefined` if invalid.
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
