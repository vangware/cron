import { CronMonth } from "../types/CronMonth";
import { parseCronPart } from "./parseCronPart";

/**
 * Parses given source CronMonth to string.
 * @param source Source CronMonth.
 */
export const parseCronMonth = (parse: CronMonth) => parseCronPart(parse);
