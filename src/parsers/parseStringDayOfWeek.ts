import { CronDayOfWeek } from "../types/CronDayOfWeek";
import { parseCronLast } from "./parseCronLast";
import { parseCronStartOrBlank } from "./parseCronStartOrBlank";
import { parseStringDayOfWeekValue } from "./parseStringDayOfWeekValue";
import { parseStringLastValue } from "./parseStringLastValue";
import { parseStringPart } from "./parseStringPart";
import { parseStringSpecificDayOfWeek } from "./parseStringSpecificDayOfWeek";

/**
 * Parses a string into a `CronDayOfWeek`.
 * @param source string to be parsed.
 * @returns A `CronDayOfWeek` or `undefined` if invalid.
 */
export const parseStringDayOfWeek = (
	source: string
): CronDayOfWeek | undefined =>
	parseCronLast(source) ??
	parseCronStartOrBlank(source) ??
	parseStringLastValue(source) ??
	parseStringSpecificDayOfWeek(source) ??
	parseStringPart(parseStringDayOfWeekValue)(source);
