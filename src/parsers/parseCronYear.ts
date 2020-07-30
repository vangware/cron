import { parseCronPart } from "./parseCronPart";
import { parseCronYearValue } from "./parseCronYearValue";

/**
 * Parses given source CronYear to string.
 * @param source Source CronYear.
 */
export const parseCronYear = parseCronPart(parseCronYearValue);
