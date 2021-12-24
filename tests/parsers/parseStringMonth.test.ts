import { suite } from "@vangware/test";
import { CRON_EVERY } from "../../src/constants.js";
import { parseStringMonth } from "../../src/parsers/parseStringMonth.js";

export default suite([
	{
		given: "in October",
		must: "return 10",
		received: parseStringMonth("10"),
		wanted: 10,
	},
	{
		given: "every month",
		must: "return *",
		received: parseStringMonth(CRON_EVERY),
		wanted: CRON_EVERY,
	},
	{
		given: "every 6 months starting in February",
		must: "return CronRange",
		received: parseStringMonth("2/6"),
		wanted: { every: 6, start: 2 },
	},
	{
		given: "every 6 months starting in January",
		must: "return CronRange",
		received: parseStringMonth("*/6"),
		wanted: { every: 6, start: CRON_EVERY },
	},
	{
		given: "in January, February, March and April",
		must: "return CronList",
		received: parseStringMonth("1,2,3,4"),
		wanted: [1, 2, 3, 4],
	},
	{
		given: "between January and May",
		must: "return CronRange",
		received: parseStringMonth("1-5"),
		wanted: { from: 1, to: 5 },
	},
	{
		given: "between January and October",
		must: "return CronRange",
		received: parseStringMonth("JAN-OCT"),
		wanted: { from: "JAN", to: "OCT" },
	},
	{
		given: "between January and October",
		must: "return CronRange",
		received: parseStringMonth("jan-oct"),
		wanted: { from: "JAN", to: "OCT" },
	},
	{
		given:
			// eslint-disable-next-line max-len
			"in January, February and March, and every month between May and July",
		must: "return CronList",
		received: parseStringMonth("1,2,3,5-7"),
		wanted: [1, 2, 3, { from: 5, to: 7 }],
	},
	{
		given: "invalid value",
		must: "return undefined",
		received: parseStringMonth("INVALID"),
		wanted: undefined,
	},
	{
		given: "invalid value in list",
		must: "return undefined",
		received: parseStringMonth("1,2,3,4,INVALID"),
		wanted: undefined,
	},
]);
