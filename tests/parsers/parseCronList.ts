import { test } from "@vangware/test";
import { CRON_EVERY } from "../../src/constants";
import { parseCronList } from "../../src/parsers/parseCronList";

export default test([
	{
		given: "a valid list",
		must: "return CronList",
		received: parseCronList([13, 10]),
		wanted: "13,10"
	},
	{
		given: "a valid list including a range",
		must: "return CronList",
		received: parseCronList([{ from: 13, to: 10 }, 10]),
		wanted: "13-10,10"
	},
	{
		given: "a valid list including a steps value",
		must: "return CronList",
		received: parseCronList([{ every: 10, start: 13 }, 10]),
		wanted: "13/10,10"
	},
	{
		given: "a valid list including a steps value with a range",
		must: "return CronList",
		received: parseCronList([
			{ every: 10, start: { from: 13, to: 10 } },
			10
		]),
		wanted: "13-10/10,10"
	},
	{
		given: "a valid list including a steps value with an *",
		must: "return CronList",
		received: parseCronList([{ every: 10, start: CRON_EVERY }, 10]),
		wanted: "*/10,10"
	}
]);
