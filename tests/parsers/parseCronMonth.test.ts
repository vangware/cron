import { suite } from "@vangware/test";
import { CRON_EVERY } from "../../src/constants.js";
import { parseCronMonth } from "../../src/parsers/parseCronMonth.js";

export default suite([
	{
		given: "in October",
		must: "return 10",
		received: parseCronMonth(10),
		wanted: "10",
	},
	{
		given: "every month",
		must: "return *",
		received: parseCronMonth(CRON_EVERY),
		wanted: CRON_EVERY,
	},
	{
		given: "every 6 months starting in February",
		must: "return CronRange",
		received: parseCronMonth({ every: 6, start: 2 }),
		wanted: "2/6",
	},
	{
		given: "every 6 months starting in January",
		must: "return CronRange",
		received: parseCronMonth({ every: 6, start: CRON_EVERY }),
		wanted: "*/6",
	},
	{
		given: "in January, February, March and April",
		must: "return CronList",
		received: parseCronMonth([1, 2, 3, 4]),
		wanted: "1,2,3,4",
	},
	{
		given: "between January and May",
		must: "return CronRange",
		received: parseCronMonth({ from: 1, to: 5 }),
		wanted: "1-5",
	},
	{
		given: "between January and October",
		must: "return CronRange",
		received: parseCronMonth({ from: "JAN", to: "OCT" }),
		wanted: "JAN-OCT",
	},
	{
		given:
			// eslint-disable-next-line max-len
			"in January, February and March, and every month between May and July",
		must: "return CronList",
		received: parseCronMonth([1, 2, 3, { from: 5, to: 7 }]),
		wanted: "1,2,3,5-7",
	},
]);
