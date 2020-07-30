import { stringParseDecimal } from "@vangware/utils";
import { CronNearestDayOfMonth } from "../types/CronNearestDayOfMonth";
import { isStringNearestDayOfMonth } from "../validations/isStringNearestDayOfMonth";

export const parseStringNearestDayOfMonth = (source: string) =>
	isStringNearestDayOfMonth(source)
		? ({ nearest: stringParseDecimal(source) } as CronNearestDayOfMonth)
		: undefined;
