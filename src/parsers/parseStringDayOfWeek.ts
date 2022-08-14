import type { Maybe } from "@vangware/types";
import type { CronDayOfWeek } from "../types/CronDayOfWeek.js";
import { parseCronLast } from "./parseCronLast.js";
import { parseCronStartOrBlank } from "./parseCronStartOrBlank.js";
import { parseStringDayOfWeekValue } from "./parseStringDayOfWeekValue.js";
import { parseStringLastValue } from "./parseStringLastValue.js";
import { parseStringPart } from "./parseStringPart.js";
import { parseStringSpecificDayOfWeek } from "./parseStringSpecificDayOfWeek.js";

/**
 * Parses a string into a `CronDayOfWeek`.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseStringDayOfWeek("6"); // 6
 * parseStringDayOfWeek("*"); // "*"
 * parseStringDayOfWeek("?"); // "?"
 * parseStringDayOfWeek("2/6"); // { every: 6, start: 2 }
 * parseStringDayOfWeek("?/6"); // { every: 6, start: "?" }
 * parseStringDayOfWeek("1,2,3,4"); // [1, 2, 3, 4]
 * parseStringDayOfWeek("1-5"); // { from: 1, to: 5 }
 * parseStringDayOfWeek("MON-SAT"); // { from: "MON", to: "SAT" }
 * parseStringDayOfWeek("mon-sat"); // { from: "MON", to: "SAT" }
 * parseStringDayOfWeek("1,2,3,5-7"); // [1, 2, 3, { from: 5, to: 7 }]
 * parseStringDayOfWeek("L"); // "L"
 * parseStringDayOfWeek("2L"); // { last: 2 }
 * parseStringDayOfWeek("1#5"); // { day: 1, week: 5 }
 * parseStringDayOfWeek("INVALID"); // undefined
 * parseStringDayOfWeek("1,2,3,4,INVALID"); // undefined
 * ```
 * @param source String to be parsed.
 * @returns A `CronDayOfWeek` or `undefined` if invalid.
 */
export const parseStringDayOfWeek = (source: string): Maybe<CronDayOfWeek> =>
	parseCronLast(source) ??
	parseCronStartOrBlank(source) ??
	parseStringLastValue(source) ??
	parseStringSpecificDayOfWeek(source) ??
	parseStringPart([0, 7])(parseStringDayOfWeekValue)(source);
