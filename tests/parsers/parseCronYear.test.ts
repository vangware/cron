import { suite } from "@vangware/test";
import { CRON_EVERY } from "../../src/constants.js";
import { parseCronYear } from "../../src/parsers/parseCronYear.js";

export default suite([
	{
		given: "in 1989",
		must: "return *",
		received: parseCronYear(1989),
		wanted: "1989",
	},
	{
		given: "every year",
		must: "return *",
		received: parseCronYear(CRON_EVERY),
		wanted: CRON_EVERY,
	},
	{
		given: "every 10 years starting in 1989",
		must: "return CronRange",
		received: parseCronYear({ every: 10, start: 1989 }),
		wanted: "1989/10",
	},
	{
		given: "every 10 years starting in 1970",
		must: "return CronRange",
		received: parseCronYear({ every: 10, start: CRON_EVERY }),
		wanted: "*/10",
	},
	{
		given: "in 1989, 1991, 2015 and 2020",
		must: "return CronList",
		received: parseCronYear([1989, 1991, 2015, 2020]),
		wanted: "1989,1991,2015,2020",
	},
	{
		given: "between 1989 and 2020",
		must: "return CronRange",
		received: parseCronYear({ from: 1989, to: 2020 }),
		wanted: "1989-2020",
	},
	{
		given: "in 1989, 1991, 2015 and 2020, and between 1989 and 2020",
		must: "return CronList with CronRange int it",
		received: parseCronYear([
			1989,
			1991,
			2015,
			2020,
			{ from: 1989, to: 2020 },
		]),
		wanted: "1989,1991,2015,2020,1989-2020",
	},
]);
