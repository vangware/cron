import { parseCronHoursValue } from "./parseCronHoursValue";
import { parseCronPart } from "./parseCronPart";

/**
 * Parses given source CronHours to string.
 * @param source Source CronHours.
 */
export const parseCronHours = parseCronPart(parseCronHoursValue);
