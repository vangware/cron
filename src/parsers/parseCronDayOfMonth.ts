import { CronDayOfMonth } from "../types/CronDayOfMonth";
import { CronLast } from "../types/CronLast";
import { CronNearestDayOfMonth } from "../types/CronNearestDayOfMonth";
import { CronStartOrBlank } from "../types/CronStartOrBlank";
import { parseCronDayOfMonthValue } from "./parseCronDayOfMonthValue";
import { parseCronLast } from "./parseCronLast";
import { parseCronNearestDayOfMonth } from "./parseCronNearestDayOfMonth";
import { parseCronPart } from "./parseCronPart";
import { parseCronStartOrBlank } from "./parseCronStartOrBlank";

/**
 * Parses `CronDayOfMonth` into a string.
 * @param source `CronDayOfMonth` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronDayOfMonth = (source: CronDayOfMonth) =>
	parseCronLast(source as CronLast) ??
	parseCronStartOrBlank(source as CronStartOrBlank) ??
	parseCronNearestDayOfMonth(source as CronNearestDayOfMonth) ??
	parseCronPart(parseCronDayOfMonthValue)(
		source as Exclude<
			CronDayOfMonth,
			CronLast | CronStartOrBlank | CronNearestDayOfMonth
		>
	);
