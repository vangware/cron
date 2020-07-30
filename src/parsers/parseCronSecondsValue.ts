import { CronSecondsValue } from "../types/CronSecondsValue";
import { CronValueParser } from "../types/CronValueParser";
import { isCronSecondsValue } from "../validations/isCronSecondsValue";

/*
 * Parses given source string to CronSecondsValue.
 * @param source Source string to be parsed.
 */
// eslint-disable-next-line max-len
export const parseCronSecondsValue: CronValueParser<CronSecondsValue> = source =>
	isCronSecondsValue(source) ? `${source}` : undefined;
