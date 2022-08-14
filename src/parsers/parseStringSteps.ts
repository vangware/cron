import { parseDecimal } from "@vangware/parsers";
import { between, isNumber, isUndefined } from "@vangware/predicates";
import type { Maybe } from "@vangware/types";
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
 * @category Parsers
 * @example
 * ```typescript
 * const parseSecondsSteps = parseStringSteps([0, 59])(parseStringSecondsValue);
 *
 * parseSecondsSteps("13/10"); // { every: 10, start: 13 }
 * parseSecondsSteps("13-10/10"); // { every: 10, start: { from: 13, to: 10 } }
 * parseSecondsSteps("?/10"); // { every: 10, start: "?" }
 * parseSecondsSteps("13"); // undefined
 * ```
 * @param limit `LimitTuple` for `CronSteps`.
 * @returns Curried function with `limit` in context.
 */
export const parseStringSteps =
	([minimum, maximum]: LimitTuple) =>
	<Value>(parser: StringValueParser<Value>) =>
	(source: string): Maybe<CronSteps<Value>> => {
		const valid = isStringSteps(source);
		const [startString = "", everyString = ""] = valid
			? source.split(CRON_STEPS_SEPARATOR)
			: [];
		const everyNumber = parseDecimal(everyString);
		const every =
			valid &&
			isNumber(everyNumber) &&
			between(minimum)(maximum)(everyNumber)
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
