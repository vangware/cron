import { CronHours } from "../types/CronHours";
import { parseCronPart } from "./parseCronPart";

/**
 * Parses given source CronHours to string.
 * @param source Source CronHours.
 */
export const parseCronHours = (source: CronHours) => parseCronPart(source);
