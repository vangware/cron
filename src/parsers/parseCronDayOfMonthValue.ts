import { CronDayOfMonthValue } from "../types/CronDayOfMonthValue";
import { CronValueParser } from "../types/CronValueParser";
import { isCronDayOfMonthValue } from "../validations/isCronDayOfMonthValue";

/*
 * Parses given source CronDayOfMonthValue.
 * @param source Source string to be parsed.
 */
// eslint-disable-next-line max-len
export const parseCronDayOfMonthValue: CronValueParser<CronDayOfMonthValue> = source =>
	isCronDayOfMonthValue(source) ? `${source}` : undefined;
