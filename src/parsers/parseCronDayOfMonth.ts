import type { CronDayOfMonth } from "../types/CronDayOfMonth.js";
import type { CronLast } from "../types/CronLast.js";
import type { CronNearestDayOfMonth } from "../types/CronNearestDayOfMonth.js";
import type { CronStartOrBlank } from "../types/CronStartOrBlank.js";
import { parseCronDayOfMonthValue } from "./parseCronDayOfMonthValue.js";
import { parseCronLast } from "./parseCronLast.js";
import { parseCronNearestDayOfMonth } from "./parseCronNearestDayOfMonth.js";
import { parseCronPart } from "./parseCronPart.js";
import { parseCronStartOrBlank } from "./parseCronStartOrBlank.js";

/**
 * Parses `CronDayOfMonth` into a string.
 *
 * @category Parser
 * @param source `CronDayOfMonth` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronDayOfMonth = (source: CronDayOfMonth) =>
	parseCronLast(source as CronLast) ??
	parseCronStartOrBlank(source as CronStartOrBlank) ??
	parseCronNearestDayOfMonth(source as CronNearestDayOfMonth) ??
	parseCronPart([0, 31])(parseCronDayOfMonthValue)(
		source as Exclude<
			CronDayOfMonth,
			CronLast | CronNearestDayOfMonth | CronStartOrBlank
		>,
	);
