import { parseCronMinutesValue } from "./parseCronMinutesValue";
import { parseCronPart } from "./parseCronPart";

/**
 * Parses given source CronMinutes to string.
 * @param source Source CronMinutes.
 */
export const parseCronMinutes = parseCronPart(parseCronMinutesValue);
