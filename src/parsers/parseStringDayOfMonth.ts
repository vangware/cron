import type { Maybe } from "@vangware/types";
import type { CronDayOfMonth } from "../types/CronDayOfMonth.js";
import { parseCronLast } from "./parseCronLast.js";
import { parseCronStartOrBlank } from "./parseCronStartOrBlank.js";
import { parseStringDayOfMonthValue } from "./parseStringDayOfMonthValue.js";
import { parseStringNearestDayOfMonth } from "./parseStringNearestDayOfMonth.js";
import { parseStringPart } from "./parseStringPart.js";

/**
 * Parses a string into a `CronDayOfMonth`.
 *
 * @category Parsers
 * @example
 * ```typescript
 * parseStringDayOfMonth("10"); // 10,
 * parseStringDayOfMonth("*"); // "*",
 * parseStringDayOfMonth("?"); // "?",
 * parseStringDayOfMonth("2/10"); // { every: 10, start: 2 },
 * parseStringDayOfMonth("?/10"); // { every: 10, start: "?" },
 * parseStringDayOfMonth("1,2,3,4"); // [1, 2, 3, 4],
 * parseStringDayOfMonth("5-10"); // { from: 5, to: 10 },
 * parseStringDayOfMonth("1,2,3,4,5-10"); // [1, 2, 3, 4, { from: 5, to: 10 }],
 * parseStringDayOfMonth("L"); // "L",
 * parseStringDayOfMonth("1W"); // { nearest: 1 },
 * parseStringDayOfMonth("INVALID"); // undefined,
 * parseStringDayOfMonth("1,2,3,4,INVALID"); // undefined,
 * ```
 * @param source string to be parsed.
 * @returns A `CronDayOfMonth` or `undefined` if invalid.
 */
export const parseStringDayOfMonth = (source: string): Maybe<CronDayOfMonth> =>
	parseCronLast(source) ??
	parseCronStartOrBlank(source) ??
	parseStringNearestDayOfMonth(source) ??
	parseStringPart([0, 31])(parseStringDayOfMonthValue)(source);
