import { suite } from "@vangware/test";
import { CRON_EVERY } from "../../src/constants.js";
import { parseStringList } from "../../src/parsers/parseStringList.js";
import { parseStringSecondsValue } from "../../src/parsers/parseStringSecondsValue.js";

const parseStringListSeconds = parseStringList([0, 59])(
	parseStringSecondsValue,
);

export default suite([
	{
		given: "a valid list",
		must: "return CronList",
		received: parseStringListSeconds("13,10"),
		wanted: [13, 10],
	},
	{
		given: "a valid list including a range",
		must: "return CronList",
		received: parseStringListSeconds("13-10,10"),
		wanted: [{ from: 13, to: 10 }, 10],
	},
	{
		given: "a valid list including a steps value",
		must: "return CronList",
		received: parseStringListSeconds("13/10,10"),
		wanted: [{ every: 10, start: 13 }, 10],
	},
	{
		given: "a valid list including a steps value with a range",
		must: "return CronList",
		received: parseStringListSeconds("13-10/10,10"),
		wanted: [{ every: 10, start: { from: 13, to: 10 } }, 10],
	},
	{
		given: "a valid list including a steps value with an *",
		must: "return CronList",
		received: parseStringListSeconds("*/10,10"),
		wanted: [{ every: 10, start: CRON_EVERY }, 10],
	},
	{
		given: "a valid list including invalid values",
		must: "return CronList",
		received: parseStringListSeconds("13,INVALID"),
		wanted: undefined,
	},
	{
		given: "an invalid list",
		must: "return undefined",
		received: parseStringListSeconds("INVALID"),
		wanted: undefined,
	},
]);
