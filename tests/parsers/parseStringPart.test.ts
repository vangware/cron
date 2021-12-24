import { suite } from "@vangware/test";
import { CRON_EVERY } from "../../src/constants.js";
import { parseStringPart } from "../../src/parsers/parseStringPart.js";
import { parseStringSecondsValue } from "../../src/parsers/parseStringSecondsValue.js";

const parseStringPartSeconds = parseStringPart([0, 59])(
	parseStringSecondsValue,
);

export default suite([
	{
		given: "a valid *",
		must: "return CronEvery",
		received: parseStringPartSeconds(CRON_EVERY),
		wanted: CRON_EVERY,
	},
	{
		given: "a valid list",
		must: "return CronList",
		received: parseStringPartSeconds("13,10"),
		wanted: [13, 10],
	},
	{
		given: "a valid list including a range",
		must: "return CronList",
		received: parseStringPartSeconds("13-10,10"),
		wanted: [{ from: 13, to: 10 }, 10],
	},
	{
		given: "a valid list including a steps value",
		must: "return CronList",
		received: parseStringPartSeconds("13/10,10"),
		wanted: [{ every: 10, start: 13 }, 10],
	},
	{
		given: "a valid list including a steps value with a range",
		must: "return CronList",
		received: parseStringPartSeconds("13-10/10,10"),
		wanted: [{ every: 10, start: { from: 13, to: 10 } }, 10],
	},
	{
		given: "a valid list including a steps value with an *",
		must: "return CronList",
		received: parseStringPartSeconds("*/10,10"),
		wanted: [{ every: 10, start: CRON_EVERY }, 10],
	},
	{
		given: "a valid steps value",
		must: "return CronSteps object",
		received: parseStringPartSeconds("13/10"),
		wanted: { every: 10, start: 13 },
	},
	{
		given: "a valid steps value including a range",
		must: "return CronSteps object",
		received: parseStringPartSeconds("13-10/10"),
		wanted: { every: 10, start: { from: 13, to: 10 } },
	},
	{
		given: "a valid steps value including an *",
		must: "return CronSteps object",
		received: parseStringPartSeconds("*/10"),
		wanted: { every: 10, start: CRON_EVERY },
	},
	{
		given: "a valid range",
		must: "return CronRange object",
		received: parseStringPartSeconds("13-10"),
		wanted: { from: 13, to: 10 },
	},
]);
