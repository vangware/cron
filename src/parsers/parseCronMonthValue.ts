import { CronMonthValue } from "../types/CronMonthValue";
import { CronValueParser } from "../types/CronValueParser";
import { isCronMonthValue } from "../validations/isCronMonthValue";

/*
 * Parses given source string to CronMonthValue.
 * @param source Source string to be parsed.
 */
// eslint-disable-next-line max-len
export const parseCronMonthValue: CronValueParser<CronMonthValue> = source =>
	isCronMonthValue(source) ? `${source}` : undefined;
