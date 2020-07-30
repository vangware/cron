import { CronSeconds } from "../types/CronSeconds";
import { parseCronPart } from "./parseCronPart";

/**
 * Parses given source CronSeconds to string.
 * @param source Source CronSeconds.
 */
export const parseCronSeconds = (source: CronSeconds) => parseCronPart(source);
