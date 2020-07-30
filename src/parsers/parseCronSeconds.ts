import { parseCronPart } from "./parseCronPart";
import { parseCronSecondsValue } from "./parseCronSecondsValue";

/**
 * Parses given source CronSeconds to string.
 * @param source Source CronSeconds.
 */
export const parseCronSeconds = parseCronPart(parseCronSecondsValue);
