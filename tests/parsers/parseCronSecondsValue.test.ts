import { suite } from "@vangware/test";
import { parseCronSecondsValue } from "../../src/parsers/parseCronSecondsValue.js";
import type { CronSecondsValue } from "../../src/types/CronSecondsValue.js";

export default suite([
	{
		given: "A valid seconds value",
		must: "return it",
		received: parseCronSecondsValue(10),
		wanted: "10",
	},
	{
		given: "Other valid seconds value",
		must: "return it",
		received: parseCronSecondsValue(59),
		wanted: "59",
	},
	{
		given: "Invalid seconds value",
		must: "return it",
		received: parseCronSecondsValue(99 as CronSecondsValue),
		wanted: undefined,
	},
]);
