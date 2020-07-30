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
 * Parses given source CronDayOfWeek to string.
 * @param source Source CronDayOfWeek.
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
