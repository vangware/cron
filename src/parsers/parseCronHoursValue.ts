import { CronHoursValue } from "../types/CronHoursValue";
import { CronValueParser } from "../types/CronValueParser";
import { isCronHoursValue } from "../validations/isCronHoursValue";

/*
 * Parses given source string to CronHoursValue.
 * @param source Source string to be parsed.
 */
// eslint-disable-next-line max-len
export const parseCronHoursValue: CronValueParser<CronHoursValue> = source =>
	isCronHoursValue(source) ? `${source}` : undefined;
