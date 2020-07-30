import { isCronRange } from "../validations/isCronRange";

/**
 * Takes a CronRange and returns a string.
 * @param source Source CronRange to be parsed.
 */
export const parseCronRange = (source: unknown) =>
	isCronRange(source) ? `${source.from}-${source.to}` : undefined;
