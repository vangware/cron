import type { CronEvery } from "../types/CronEvery";
import { isCronEvery } from "../validations/isCronEvery";

/**
 * Parses a `CronEvery` into a string.
 * @param source `CronEvery` to be parsed.
 * @returns A string or `undefined` if invalid.
 */
export const parseCronEvery = (source: CronEvery | string) =>
	isCronEvery(source) ? source : undefined;
