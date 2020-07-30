import { CronDayOfWeek } from "../types/CronDayOfWeek";
import { CronLast } from "../types/CronLast";
import { CronLastValue } from "../types/CronLastValue";
import { CronSpecificDayOfWeek } from "../types/CronSpecificDayOfWeek";
import { CronStartOrBlank } from "../types/CronStartOrBlank";
import { parseCronDayOfWeekValue } from "./parseCronDayOfWeekValue";
import { parseCronLast } from "./parseCronLast";
import { parseCronLastValue } from "./parseCronLastValue";
import { parseCronPart } from "./parseCronPart";
import { parseCronSpecificDayOfWeek } from "./parseCronSpecificDayOfWeek";
import { parseCronStartOrBlank } from "./parseCronStartOrBlank";

/**
 * Parses `CronDayOfWeek` into a string.
 * @param source `CronDayOfWeek` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronDayOfWeek = (source: CronDayOfWeek) =>
	parseCronLast(source as CronLast) ??
	parseCronStartOrBlank(source as CronStartOrBlank) ??
	parseCronLastValue(source as CronLastValue) ??
	parseCronSpecificDayOfWeek(source as CronSpecificDayOfWeek) ??
	parseCronPart(parseCronDayOfWeekValue)(
		source as Exclude<
			CronDayOfWeek,
			CronLast | CronStartOrBlank | CronLastValue | CronSpecificDayOfWeek
		>
	);
