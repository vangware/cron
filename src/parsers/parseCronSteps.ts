import { isCronSteps } from "../validations/isCronSteps";
import { parseCronEvery } from "./parseCronEvery";
import { parseCronRange } from "./parseCronRange";

/**
 * Takes a CronSteps object and returns a string.
 * @param source Source CronSteps.
 */
export const parseCronSteps = (source: unknown) =>
	isCronSteps(source)
		? `${
				parseCronEvery(source.start) ??
				parseCronRange(source.start) ??
				source.start
		  }/${source.every}`
		: undefined;
