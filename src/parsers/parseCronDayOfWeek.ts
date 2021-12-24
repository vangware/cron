import type { CronDayOfWeek } from "../types/CronDayOfWeek.js";
import type { CronLast } from "../types/CronLast.js";
import type { CronLastValue } from "../types/CronLastValue.js";
import type { CronSpecificDayOfWeek } from "../types/CronSpecificDayOfWeek.js";
import type { CronStartOrBlank } from "../types/CronStartOrBlank.js";
import { parseCronDayOfWeekValue } from "./parseCronDayOfWeekValue.js";
import { parseCronLast } from "./parseCronLast.js";
import { parseCronLastValue } from "./parseCronLastValue.js";
import { parseCronPart } from "./parseCronPart.js";
import { parseCronSpecificDayOfWeek } from "./parseCronSpecificDayOfWeek.js";
import { parseCronStartOrBlank } from "./parseCronStartOrBlank.js";

/**
 * Parses `CronDayOfWeek` into a string.
 *
 * @category Parser
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
		>,
	);
