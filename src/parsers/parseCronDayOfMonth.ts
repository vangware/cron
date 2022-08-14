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
 * @category Parsers
 * @example
 * ```typescript
 * parseCronDayOfMonth(10); // "10"
 * parseCronDayOfMonth("*"); // "*"
 * parseCronDayOfMonth("?"); // "?"
 * parseCronDayOfMonth({ every: 10, start: 2 }); // "2/10"
 * parseCronDayOfMonth({ every: 10, start: "L" }); // "L/10"
 * parseCronDayOfMonth([1, 2, 3, 4]); // "1,2,3,4"
 * parseCronDayOfMonth({ from: 5, to: 10 }); // "5-10"
 * parseCronDayOfMonth([1, 2, 3, 4, { from: 5, to: 10 }]); // "1,2,3,4,5-10"
 * parseCronDayOfMonth("L"); // "L"
 * parseCronDayOfMonth({ nearest: 1 }); // "1W"
 * parseCronDayOfMonth({ every: 99, start: "*" }); // undefined
 * ```
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
