import { suite } from "@vangware/test";
import { parseCronHoursValue } from "../../src/parsers/parseCronHoursValue.js";
import type { CronHoursValue } from "../../src/types/CronHoursValue.js";

export default suite([
	{
		given: "A valid hours value",
		must: "return it",
		received: parseCronHoursValue(10),
		wanted: "10",
	},
	{
		given: "Other valid hours value",
		must: "return it",
		received: parseCronHoursValue(23),
		wanted: "23",
	},
	{
		given: "Invalid hours value",
		must: "return it",
		received: parseCronHoursValue(99 as CronHoursValue),
		wanted: undefined,
	},
]);
