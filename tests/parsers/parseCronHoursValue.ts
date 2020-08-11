import { test } from "@vangware/test";
import { parseCronHoursValue } from "../../src/parsers/parseCronHoursValue";
import { CronHoursValue } from "../../src/types/CronHoursValue";

export default test([
	{
		given: "A valid hours value",
		must: "return it",
		received: parseCronHoursValue(10),
		wanted: "10"
	},
	{
		given: "Other valid hours value",
		must: "return it",
		received: parseCronHoursValue(23),
		wanted: "23"
	},
	{
		given: "Invalid hours value",
		must: "return it",
		received: parseCronHoursValue(99 as CronHoursValue),
		wanted: undefined
	}
]);
