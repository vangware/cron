import { CronMinutesValue } from "../types/CronMinutesValue";
import { CronValueParser } from "../types/CronValueParser";
import { isCronMinutesValue } from "../validations/isCronMinutesValue";

/*
 * Parses given source string to CronMinutesValue.
 * @param source Source string to be parsed.
 */
// eslint-disable-next-line max-len
export const parseCronMinutesValue: CronValueParser<CronMinutesValue> = source =>
	isCronMinutesValue(source) ? `${source}` : undefined;
