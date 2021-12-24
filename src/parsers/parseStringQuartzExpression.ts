import { numberBetween } from "@vangware/utils";
import { splitExpression } from "../utils/splitExpression.js";
import { isStringYearValue } from "../validations/isStringYearValue.js";

/**
 * Parses given string expression.
 *
 * @category Parser
 * @param source string to be parsed.
 * @returns An array of 7 elements or `undefined` if invalid.
 */
export const parseStringQuartzExpression = (source: string) => {
	const parsed = splitExpression(source);
	const { length } = parsed;
	const valid = numberBetween(5)(7)(length);
	const missingSecondsAndYear = valid && length === 5;
	const missingSecondsOrYear = valid && length === 6;
	const missingSeconds = missingSecondsOrYear && isStringYearValue(parsed[5]);

	return valid
		? ((missingSecondsAndYear
				? ["*", ...parsed, "*"]
				: missingSecondsOrYear
				? missingSeconds
					? ["*", ...parsed]
					: [...parsed, "*"]
				: parsed) as unknown as readonly [
				seconds: string,
				minutes: string,
				hours: string,
				dayOfMonth: string,
				month: string,
				dayOfWeek: string,
				year: string,
		  ])
		: undefined;
};
