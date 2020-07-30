import { CronRange } from "../types/CronRange";
import { CronValueParser } from "../types/CronValueParser";
import { isCronRange } from "../validations/isCronRange";

/**
 * Takes a CronRange and returns a string.
 * @param source Source CronRange to be parsed.
 */
export const parseCronRange = <Value>(parser: CronValueParser<Value>) =>
	/**
	 * @param source Source CronRange to be parsed.
	 */
	(source: CronRange<Value>) => {
		const valid = isCronRange(source);
		const from = valid ? parser(source.from) : undefined;
		const to = valid ? parser(source.to) : undefined;

		return valid && from && to ? `${from}-${to}` : undefined;
	};
