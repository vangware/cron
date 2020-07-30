import { CronDayOfWeekValue } from "../types/CronDayOfWeekValue";
import { CronValueParser } from "../types/CronValueParser";
import { isCronDayOfWeekValue } from "../validations/isCronDayOfWeekValue";

/*
 * Parses given source string to CronDayOfWeekValue.
 * @param source Source string to be parsed.
 */
// eslint-disable-next-line max-len
export const parseCronDayOfWeekValue: CronValueParser<CronDayOfWeekValue> = source =>
	isCronDayOfWeekValue(source) ? `${source}` : undefined;
