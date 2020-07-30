import { CronMinutes } from "../types/CronMinutes";
import { parseCronPart } from "./parseCronPart";

/**
 * Parses given source CronMinutes to string.
 * @param source Source CronMinutes.
 */
export const parseCronMinutes = (source: CronMinutes) => parseCronPart(source);
