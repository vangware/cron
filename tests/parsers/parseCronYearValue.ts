import { test } from "@vangware/test";
import { parseCronYearValue } from "../../src/parsers/parseCronYearValue";
import { CronYearValue } from "../../src/types/CronYearValue";

export default test([
	{
		given: "A valid seconds value",
		must: "return it",
		received: parseCronYearValue(1989),
		wanted: "1989"
	},
	{
		given: "Other valid seconds value",
		must: "return it",
		received: parseCronYearValue(2020),
		wanted: "2020"
	},
	{
		given: "Invalid seconds value",
		must: "return it",
		received: parseCronYearValue(3000 as CronYearValue),
		wanted: undefined
	}
]);
