import { CronValueParser } from "../types/CronValueParser";
import { CronYearValue } from "../types/CronYearValue";
import { isCronYearValue } from "../validations/isCronYearValue";

/*
 * Parses given source string to CronYearValue.
 * @param source Source string to be parsed.
 */
export const parseCronYearValue: CronValueParser<CronYearValue> = source =>
	isCronYearValue(source) ? `${source}` : undefined;
