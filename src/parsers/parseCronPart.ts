import { parseCronEvery } from "./parseCronEvery";
import { parseCronList } from "./parseCronList";
import { parseCronRange } from "./parseCronRange";
import { parseCronSteps } from "./parseCronSteps";

/**
 * Parses cron part with given parser.
 * @param source Source string to be parsed.
 */
export const parseCronPart = <Value>(source: Value): string =>
	parseCronEvery(source) ??
	parseCronList(source) ??
	parseCronSteps(source) ??
	parseCronRange(source) ??
	`${source}`;
