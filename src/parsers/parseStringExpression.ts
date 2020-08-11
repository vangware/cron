import { numberBetween } from "@vangware/utils";
import { isStringYearValue } from "../validations/isStringYearValue";
import { splitExpression } from "./splitExpression";

/**
 * Parses given expression or undefined if invalid.
 * @param source string to be parsed.
 * @returns An array of 7 elements or `undefined` if invalid.
 */
export const parseStringExpression = (source: string) => {
	const parsed = splitExpression(source);
	const { length } = parsed;
	const valid = numberBetween(5)(7)(length);
	const missingSecondsAndYear = valid && length === 5;
	const missingSecondsOrYear = valid && length === 6;
	const missingSeconds = missingSecondsOrYear && isStringYearValue(parsed[5]);

	return valid
		? missingSecondsAndYear
			? ["*", ...parsed, "*"]
			: missingSecondsOrYear
			? missingSeconds
				? ["*", ...parsed]
				: [...parsed, "*"]
			: parsed
		: undefined;
};
