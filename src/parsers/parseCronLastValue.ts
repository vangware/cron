import { CronLastValue } from "../types/CronLastValue";
import { isCronLastValue } from "../validations/isCronLastValue";

/**
 * Parses given CronLastValue to string.
 * @param source Source CronLastValue.
 */
export const parseCronLastValue = (source: CronLastValue) =>
	isCronLastValue(source) ? `${source.last}L` : undefined;
