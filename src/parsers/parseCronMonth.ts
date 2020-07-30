import { parseCronMonthValue } from "./parseCronMonthValue";
import { parseCronPart } from "./parseCronPart";

/**
 * Parses given source CronMonth to string.
 * @param source Source CronMonth.
 */
export const parseCronMonth = parseCronPart(parseCronMonthValue);
