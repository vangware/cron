import type { CronDayOfWeek } from "../types/CronDayOfWeek.js";
import type { CronLast } from "../types/CronLast.js";
import type { CronLastValue } from "../types/CronLastValue.js";
import type { CronSpecificDayOfWeek } from "../types/CronSpecificDayOfWeek.js";
import type { CronStartOrBlank } from "../types/CronStartOrBlank.js";
import { parseCronDayOfWeekValue } from "./parseCronDayOfWeekValue.js";
import { parseCronLast } from "./parseCronLast.js";
import { parseCronLastValue } from "./parseCronLastValue.js";
import { parseCronPart } from "./parseCronPart.js";
import { parseCronSpecificDayOfWeek } from "./parseCronSpecificDayOfWeek.js";
import { parseCronStartOrBlank } from "./parseCronStartOrBlank.js";

/**
 * Parses `CronDayOfWeek` into a string.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseCronDayOfWeek(6); // "6"
 * parseCronDayOfWeek("*"); // "*"
 * parseCronDayOfWeek("?"); // "?"
 * parseCronDayOfWeek({ every: 6, start: 2 }); // "2/6"
 * parseCronDayOfWeek({ every: 6, start: "L" }); // "L/6"
 * parseCronDayOfWeek([1, 2, 3, 4]); // "1,2,3,4"
 * parseCronDayOfWeek({ from: 1, to: 5 }); // "1-5"
 * parseCronDayOfWeek({ from: "MON", to: "SAT" }); // "MON-SAT"
 * parseCronDayOfWeek([1, 2, 3, { from: 5, to: 7 }]); // "1,2,3,5-7"
 * parseCronDayOfWeek("L"); // "L"
 * parseCronDayOfWeek({ last: 2 }); // "2L"
 * parseCronDayOfWeek({ day: 1, week: 5 }); // "1#5"
 * ```
 * @param source `CronDayOfWeek` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronDayOfWeek = (source: CronDayOfWeek) =>
	parseCronLast(source as CronLast) ??
	parseCronStartOrBlank(source as CronStartOrBlank) ??
	parseCronLastValue(source as CronLastValue) ??
	parseCronSpecificDayOfWeek(source as CronSpecificDayOfWeek) ??
	parseCronPart([0, 7])(parseCronDayOfWeekValue)(
		source as Exclude<
			CronDayOfWeek,
			CronLast | CronLastValue | CronSpecificDayOfWeek | CronStartOrBlank
		>,
	);
