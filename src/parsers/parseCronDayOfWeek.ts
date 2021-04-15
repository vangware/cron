import type { CronDayOfWeek } from "../types/CronDayOfWeek";
import type { CronLast } from "../types/CronLast";
import type { CronLastValue } from "../types/CronLastValue";
import type { CronSpecificDayOfWeek } from "../types/CronSpecificDayOfWeek";
import type { CronStartOrBlank } from "../types/CronStartOrBlank";
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
	parseCronPart([0, 7])(parseCronDayOfWeekValue)(
		source as Exclude<
			CronDayOfWeek,
			CronLast | CronLastValue | CronSpecificDayOfWeek | CronStartOrBlank
		>
	);
