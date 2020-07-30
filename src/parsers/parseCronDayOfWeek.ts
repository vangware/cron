import { CronDayOfWeek } from "../types/CronDayOfWeek";
import { parseCronLast } from "./parseCronLast";
import { parseCronLastValue } from "./parseCronLastValue";
import { parseCronPart } from "./parseCronPart";
import { parseCronSpecificDayOfWeek } from "./parseCronSpecificDayOfWeek";
import { parseCronStartOrBlank } from "./parseCronStartOrBlank";

/**
 * Parses given source CronDayOfWeek to string.
 * @param source Source CronDayOfWeek.
 */
export const parseCronDayOfWeek = (source: CronDayOfWeek): string =>
	parseCronLast(source) ??
	parseCronStartOrBlank(source) ??
	parseCronLastValue(source) ??
	parseCronSpecificDayOfWeek(source) ??
	parseCronPart(source);
