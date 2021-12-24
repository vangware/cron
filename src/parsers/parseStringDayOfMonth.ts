import type { CronDayOfMonth } from "../types/CronDayOfMonth.js";
import { parseCronLast } from "./parseCronLast.js";
import { parseCronStartOrBlank } from "./parseCronStartOrBlank.js";
import { parseStringDayOfMonthValue } from "./parseStringDayOfMonthValue.js";
import { parseStringNearestDayOfMonth } from "./parseStringNearestDayOfMonth.js";
import { parseStringPart } from "./parseStringPart.js";

/**
 * Parses a string into a `CronDayOfMonth`.
 *
 * @category Parser
 * @param source string to be parsed.
 * @returns A `CronDayOfMonth` or `undefined` if invalid.
 */
export const parseStringDayOfMonth = (
	source: string,
): CronDayOfMonth | undefined =>
	parseCronLast(source) ??
	parseCronStartOrBlank(source) ??
	parseStringNearestDayOfMonth(source) ??
	parseStringPart([0, 31])(parseStringDayOfMonthValue)(source);
