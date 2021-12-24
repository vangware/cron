import { suite } from "@vangware/test";
import { CRON_EVERY } from "../../src/constants.js";
import { parseCronSecondsValue } from "../../src/parsers/parseCronSecondsValue.js";
import { parseCronSteps } from "../../src/parsers/parseCronSteps.js";

const parseCronStepsSeconds = parseCronSteps([0, 59])(parseCronSecondsValue);

export default suite([
	{
		given: "a valid steps value",
		must: "return CronSteps object",
		received: parseCronStepsSeconds({ every: 10, start: 13 }),
		wanted: "13/10",
	},
	{
		given: "an invalid steps value",
		must: "return undefined",
		received: parseCronStepsSeconds({ every: 99, start: 13 }),
		wanted: undefined,
	},
	{
		given: "a valid steps value including a range",
		must: "return CronSteps object",
		received: parseCronStepsSeconds({
			every: 10,
			start: { from: 13, to: 10 },
		}),
		wanted: "13-10/10",
	},
	{
		given: "a valid steps value including an *",
		must: "return CronSteps object",
		received: parseCronStepsSeconds({ every: 10, start: CRON_EVERY }),
		wanted: "*/10",
	},
]);
