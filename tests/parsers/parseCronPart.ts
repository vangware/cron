import { test } from "@vangware/test";
import { CRON_EVERY } from "../../src/constants";
import { parseCronPart } from "../../src/parsers/parseCronPart";
import { parseCronSecondsValue } from "../../src/parsers/parseCronSecondsValue";

const parseCronPartSeconds = parseCronPart(parseCronSecondsValue);

export default test([
	{
		given: "a valid *",
		must: "return CronEvery",
		received: parseCronPartSeconds(CRON_EVERY),
		wanted: CRON_EVERY
	},
	{
		given: "a valid list",
		must: "return CronList",
		received: parseCronPartSeconds([13, 10]),
		wanted: "13,10"
	},
	{
		given: "a valid list including a range",
		must: "return CronList",
		received: parseCronPartSeconds([{ from: 13, to: 10 }, 10]),
		wanted: "13-10,10"
	},
	{
		given: "a valid list including a steps value",
		must: "return CronList",
		received: parseCronPartSeconds([{ every: 10, start: 13 }, 10]),
		wanted: "13/10,10"
	},
	{
		given: "a valid list including a steps value with a range",
		must: "return CronList",
		received: parseCronPartSeconds([
			{ every: 10, start: { from: 13, to: 10 } },
			10
		]),
		wanted: "13-10/10,10"
	},
	{
		given: "a valid list including a steps value with an *",
		must: "return CronList",
		received: parseCronPartSeconds([{ every: 10, start: CRON_EVERY }, 10]),
		wanted: "*/10,10"
	},
	{
		given: "a valid steps value",
		must: "return CronSteps object",
		received: parseCronPartSeconds({ every: 10, start: 13 }),
		wanted: "13/10"
	},
	{
		given: "a valid steps value including a range",
		must: "return CronSteps object",
		received: parseCronPartSeconds({
			every: 10,
			start: { from: 13, to: 10 }
		}),
		wanted: "13-10/10"
	},
	{
		given: "a valid steps value including an *",
		must: "return CronSteps object",
		received: parseCronPartSeconds({ every: 10, start: CRON_EVERY }),
		wanted: "*/10"
	},
	{
		given: "a valid range",
		must: "return CronRange object",
		received: parseCronPartSeconds({
			from: 13,
			to: 10
		}),
		wanted: "13-10"
	}
]);
