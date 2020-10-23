import { isNumber, isString } from "@vangware/utils";
import type { CronMonthValue } from "../types/CronMonthValue";
import { isCronMonthValueNumber } from "./isCronMonthValueNumber";
import { isCronMonthValueString } from "./isCronMonthValueString";

/**
 * Check if given is `CronMonthValue`.
 * @param value Value to check.
 */
export const isCronMonthValue = (value: unknown): value is CronMonthValue =>
	(isNumber(value) && isCronMonthValueNumber(value)) ||
	(isString(value) && isCronMonthValueString(value));
