import { isNumber, isString } from "@vangware/utils";
import type { CronMonthValue } from "../types/CronMonthValue.js";
import { isCronMonthValueNumber } from "./isCronMonthValueNumber.js";
import { isCronMonthValueString } from "./isCronMonthValueString.js";

/**
 * Check if given is `CronMonthValue`.
 *
 * @category Validation
 * @param value Value to check.
 */
export const isCronMonthValue = (value: unknown): value is CronMonthValue =>
	(isNumber(value) && isCronMonthValueNumber(value)) ||
	(isString(value) && isCronMonthValueString(value));
