import { suite } from "@vangware/test";
import { CRON_EVERY } from "../../src/constants.js";
import { parseCronPart } from "../../src/parsers/parseCronPart.js";
import { parseCronSecondsValue } from "../../src/parsers/parseCronSecondsValue.js";

const parseCronPartSeconds = parseCronPart([0, 59])(parseCronSecondsValue);

export default suite([
	{
		given: "a valid *",
		must: "return CronEvery",
		received: parseCronPartSeconds(CRON_EVERY),
		wanted: CRON_EVERY,
	},
	{
		given: "a valid list",
		must: "return CronList",
		received: parseCronPartSeconds([13, 10]),
		wanted: "13,10",
	},
	{
		given: "a valid list including a range",
		must: "return CronList",
		received: parseCronPartSeconds([{ from: 13, to: 10 }, 10]),
		wanted: "13-10,10",
	},
	{
		given: "a valid list including a steps value",
		must: "return CronList",
		received: parseCronPartSeconds([{ every: 10, start: 13 }, 10]),
		wanted: "13/10,10",
	},
	{
		given: "a valid list including an invalid steps value",
		must: "return undefined",
		received: parseCronPartSeconds([{ every: 99, start: 13 }, 10]),
		wanted: undefined,
	},
	{
		given: "a valid list including a steps value with a range",
		must: "return CronList",
		received: parseCronPartSeconds([
			{ every: 10, start: { from: 13, to: 10 } },
			10,
		]),
		wanted: "13-10/10,10",
	},
	{
		given: "a valid list including a steps value with an *",
		must: "return CronList",
		received: parseCronPartSeconds([{ every: 10, start: CRON_EVERY }, 10]),
		wanted: "*/10,10",
	},
	{
		given: "a valid steps value",
		must: "return CronSteps object",
		received: parseCronPartSeconds({ every: 10, start: 13 }),
		wanted: "13/10",
	},
	{
		given: "a valid steps value including a range",
		must: "return CronSteps object",
		received: parseCronPartSeconds({
			every: 10,
			start: { from: 13, to: 10 },
		}),
		wanted: "13-10/10",
	},
	{
		given: "a valid steps value including an *",
		must: "return CronSteps object",
		received: parseCronPartSeconds({ every: 10, start: CRON_EVERY }),
		wanted: "*/10",
	},
	{
		given: "a valid range",
		must: "return CronRange object",
		received: parseCronPartSeconds({
			from: 13,
			to: 10,
		}),
		wanted: "13-10",
	},
]);
