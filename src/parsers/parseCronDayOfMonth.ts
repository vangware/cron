import { CronDayOfMonth } from "../types/CronDayOfMonth";
import { parseCronLast } from "./parseCronLast";
import { parseCronNearestDayOfMonth } from "./parseCronNearestDayOfMonth";
import { parseCronPart } from "./parseCronPart";
import { parseCronStartOrBlank } from "./parseCronStartOrBlank";

/**
 * Parses given source CronDayOfMonth to string.
 * @param source Source CronDayOfMonth.
 */
export const parseCronDayOfMonth = (source: CronDayOfMonth): string =>
	parseCronLast(source) ??
	parseCronStartOrBlank(source) ??
	parseCronNearestDayOfMonth(source) ??
	parseCronPart(source);
