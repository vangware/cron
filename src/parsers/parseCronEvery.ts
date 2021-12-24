import type { CronEvery } from "../types/CronEvery.js";
import { isCronEvery } from "../validations/isCronEvery.js";

/**
 * Parses a `CronEvery` into a string.
 *
 * @category Parser
 * @param source `CronEvery` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronEvery = (source: CronEvery | string) =>
	isCronEvery(source) ? source : undefined;
