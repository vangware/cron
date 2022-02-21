import type { Tests } from "@vangware/test";
import { parseCronMinutesValue } from "../../src/parsers/parseCronMinutesValue.js";
import type { CronMinutesValue } from "../../src/types/CronMinutesValue.js";

export default [
	{
		given: "A valid minutes value",
		must: "return it",
		received: parseCronMinutesValue(10),
		wanted: "10",
	},
	{
		given: "Other valid minutes value",
		must: "return it",
		received: parseCronMinutesValue(59),
		wanted: "59",
	},
	{
		given: "Invalid minutes value",
		must: "return it",
		received: parseCronMinutesValue(99 as CronMinutesValue),
		wanted: undefined,
	},
] as Tests<string>;
