import { isCronLastValue } from "../validations/isCronLastValue";

/**
 * Parses given CronLastValue to string.
 * @param source Source CronLastValue.
 */
export const parseCronLastValue = (source: unknown) =>
	isCronLastValue(source) ? `${source.last}L` : undefined;
