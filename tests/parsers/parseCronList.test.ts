import { suite } from "@vangware/test";
import { CRON_EVERY } from "../../src/constants.js";
import { parseCronList } from "../../src/parsers/parseCronList.js";
import { parseCronSecondsValue } from "../../src/parsers/parseCronSecondsValue.js";

const parseCronSecondsList = parseCronList([0, 59])(parseCronSecondsValue);

export default suite([
	{
		given: "a valid list",
		must: "return CronList",
		received: parseCronSecondsList([13, 10]),
		wanted: "13,10",
	},
	{
		given: "a valid list including a range",
		must: "return CronList",
		received: parseCronSecondsList([{ from: 13, to: 10 }, 10]),
		wanted: "13-10,10",
	},
	{
		given: "a valid list including a steps value",
		must: "return CronList",
		received: parseCronSecondsList([{ every: 10, start: 13 }, 10]),
		wanted: "13/10,10",
	},
	{
		given: "a valid list including a steps value with a range",
		must: "return CronList",
		received: parseCronSecondsList([
			{ every: 10, start: { from: 13, to: 10 } },
			10,
		]),
		wanted: "13-10/10,10",
	},
	{
		given: "a valid list including a steps value with an *",
		must: "return CronList",
		received: parseCronSecondsList([{ every: 10, start: CRON_EVERY }, 10]),
		wanted: "*/10,10",
	},
]);
