import { CronDayOfMonth } from "../types/CronDayOfMonth";
import { parseCronLast } from "./parseCronLast";
import { parseCronStartOrBlank } from "./parseCronStartOrBlank";
import { parseStringDayOfMonthValue } from "./parseStringDayOfMonthValue";
import { parseStringNearestDayOfMonth } from "./parseStringNearestDayOfMonth";
import { parseStringPart } from "./parseStringPart";

/**
 * Parses a string into a `CronDayOfMonth`.
 * @param source string to be parsed.
 * @returns A `CronDayOfMonth` or `undefined` if invalid.
 */
export const parseStringDayOfMonth = (
	source: string
): CronDayOfMonth | undefined =>
	parseCronLast(source) ??
	parseCronStartOrBlank(source) ??
	parseStringNearestDayOfMonth(source) ??
	parseStringPart(parseStringDayOfMonthValue)(source);
