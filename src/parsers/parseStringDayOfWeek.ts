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
 * @category Parser
 * @param source string to be parsed.
 * @returns A `CronDayOfWeek` or `undefined` if invalid.
 */
export const parseStringDayOfWeek = (
	source: string,
): CronDayOfWeek | undefined =>
	parseCronLast(source) ??
	parseCronStartOrBlank(source) ??
	parseStringLastValue(source) ??
	parseStringSpecificDayOfWeek(source) ??
	parseStringPart([0, 7])(parseStringDayOfWeekValue)(source);
