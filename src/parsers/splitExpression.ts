import { numberBetween } from "@vangware/utils";
import { isStringYearValue } from "../validations/isStringYearValue";

export const splitExpression = (
	source: string
): readonly string[] | undefined => {
	const parsed = source.trim().split(/[ ]+/u);
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
