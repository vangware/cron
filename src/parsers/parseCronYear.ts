import { CronYear } from "../types/CronYear";
import { parseCronPart } from "./parseCronPart";

/**
 * Parses given source CronYear to string.
 * @param source Source CronYear.
 */
export const parseCronYear = (source: CronYear) => parseCronPart(source);
