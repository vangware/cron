import { CronDayOfMonth } from "../types/CronDayOfMonth";
import { parseCronLast } from "./parseCronLast";
import { parseCronStartOrBlank } from "./parseCronStartOrBlank";
import { parseStringDayOfMonthValue } from "./parseStringDayOfMonthValue";
import { parseStringNearestDayOfMonth } from "./parseStringNearestDayOfMonth";
import { parseStringPart } from "./parseStringPart";

/**
 * Parses given source string to CronDayOfMonth.
 * @param source Source string to be parsed.
 */
export const parseStringDayOfMonth = (
	source: string
): CronDayOfMonth | undefined =>
	parseCronLast(source) ??
	parseCronStartOrBlank(source) ??
	parseStringNearestDayOfMonth(source) ??
	parseStringPart(parseStringDayOfMonthValue)(source);
