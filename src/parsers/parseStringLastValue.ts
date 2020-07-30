import { stringParseDecimal } from "@vangware/utils";
import { CronLastValue } from "../types/CronLastValue";
import { isCronDayOfWeekValueNumber } from "../validations/isCronDayOfWeekValueNumber";
import { isStringLastValue } from "../validations/isStringLastValue";

/**
 * Parses given source to CronLastValue.
 * @param source Source string to be parsed.
 */
export const parseStringLastValue = (
	source: string
): CronLastValue | undefined => {
	const valid = isStringLastValue(source);
	const last = valid ? stringParseDecimal(source) : undefined;

	return valid && last && isCronDayOfWeekValueNumber(last)
		? { last }
		: undefined;
};
