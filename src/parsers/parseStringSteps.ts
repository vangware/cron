import {
	isNumber,
	isUndefined,
	numberBetween,
	stringParseDecimal,
} from "@vangware/utils";
import { CRON_STEPS_SEPARATOR } from "../constants.js";
import type { CronSteps } from "../types/CronSteps.js";
import type { LimitTuple } from "../types/LimitTuple.js";
import type { StringValueParser } from "../types/StringValueParser.js";
import { isStringSteps } from "../validations/isStringSteps.js";
import { parseCronEvery } from "./parseCronEvery.js";
import { parseStringRange } from "./parseStringRange.js";

/**
 * Parses a string into a `CronSteps`.
 *
 * @category Parser
 * @param limit `LimitTuple` for `CronSteps`.
 * @returns Curried function with `limit` in context.
 */
export const parseStringSteps =
	([minimum, maximum]: LimitTuple) =>
	/**
	 * @param parser `StringValueParser` for `CronSteps`.
	 * @returns Curried function with `limit` and `parser` in context.
	 */
	<Value>(parser: StringValueParser<Value>) =>
	/**
	 * @param source string to be parsed.
	 * @returns A `CronSteps` or `undefined` if invalid.
	 */
	(source: string): CronSteps<Value> | undefined => {
		const valid = isStringSteps(source);
		const [startString = "", everyString = ""] = valid
			? source.split(CRON_STEPS_SEPARATOR)
			: [];
		const everyNumber = stringParseDecimal(everyString);
		const every =
			valid && numberBetween(minimum)(maximum)(everyNumber)
				? everyNumber
				: undefined;
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
