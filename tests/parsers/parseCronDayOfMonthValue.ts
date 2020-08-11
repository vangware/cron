import { test } from "@vangware/test";
import { parseCronDayOfMonthValue } from "../../src/parsers/parseCronDayOfMonthValue";
import { CronDayOfMonthValue } from "../../src/types/CronDayOfMonthValue";

export default test([
	{
		given: "A valid dayOfMonth value",
		must: "return that value",
		received: parseCronDayOfMonthValue(1),
		wanted: "1"
	},
	{
		given: "Other valid dayOfMonth value",
		must: "return that value",
		received: parseCronDayOfMonthValue(31),
		wanted: "31"
	},
	{
		given: "Invalid dayOfMonth value",
		must: "return undefined",
		received: parseCronDayOfMonthValue(99 as CronDayOfMonthValue),
		wanted: undefined
	}
]);
