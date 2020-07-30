import { test } from "@vangware/test";
import { CRON_EVERY } from "../../src/constants";
import { parseCronSteps } from "../../src/parsers/parseCronSteps";

export default test([
	{
		given: "a valid steps value",
		must: "return CronSteps object",
		received: parseCronSteps({ every: 10, start: 13 }),
		wanted: "13/10"
	},
	{
		given: "a valid steps value including a range",
		must: "return CronSteps object",
		received: parseCronSteps({ every: 10, start: { from: 13, to: 10 } }),
		wanted: "13-10/10"
	},
	{
		given: "a valid steps value including an *",
		must: "return CronSteps object",
		received: parseCronSteps({ every: 10, start: CRON_EVERY }),
		wanted: "*/10"
	}
]);
