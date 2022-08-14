import type { Tests } from "@vangware/test";
import { parseCronYearValue } from "../../src/parsers/parseCronYearValue.js";
import type { CronYearValue } from "../../src/types/CronYearValue.js";

export default [
	{
		given: "A valid seconds value",
		must: "return it",
		received: parseCronYearValue(1989),
		wanted: "1989",
	},
	{
		given: "Other valid seconds value",
		must: "return it",
		received: parseCronYearValue(2022),
		wanted: "2022",
	},
	{
		given: "Invalid seconds value",
		must: "return it",
		received: parseCronYearValue(3000 as CronYearValue),
		wanted: undefined,
	},
] as Tests<string>;
