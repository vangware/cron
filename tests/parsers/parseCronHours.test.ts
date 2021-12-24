import { suite } from "@vangware/test";
import { CRON_EVERY } from "../../src/constants.js";
import { parseCronHours } from "../../src/parsers/parseCronHours.js";

export default suite([
	{
		given: "between 10am and 11am",
		must: "return 10",
		received: parseCronHours(10),
		wanted: "10",
	},
	{
		given: "every hour",
		must: "return *",
		received: parseCronHours(CRON_EVERY),
		wanted: CRON_EVERY,
	},
	{
		given: "Every 10 hours starting at 02am",
		must: "return CronRange",
		received: parseCronHours({ every: 10, start: 2 }),
		wanted: "2/10",
	},
	{
		given: "Every 10 hours starting at 00am",
		must: "return CronRange",
		received: parseCronHours({ every: 10, start: CRON_EVERY }),
		wanted: "*/10",
	},
	{
		given: "at 01am, 02am, 03am and 04am",
		must: "return CronList",
		received: parseCronHours([1, 2, 3, 4]),
		wanted: "1,2,3,4",
	},
	{
		given: "between 05am and 10am",
		must: "return CronRange",
		received: parseCronHours({ from: 5, to: 10 }),
		wanted: "5-10",
	},
	{
		given:
			// eslint-disable-next-line max-len
			"at 01am, 02am, 03am and 04am, and every hour between 05am and 10am",
		must: "return CronList with CronRange in it",
		received: parseCronHours([1, 2, 3, 4, { from: 5, to: 10 }]),
		wanted: "1,2,3,4,5-10",
	},
]);
