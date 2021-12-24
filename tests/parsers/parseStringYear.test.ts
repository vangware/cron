import { suite } from "@vangware/test";
import { CRON_EVERY } from "../../src/constants.js";
import { parseStringYear } from "../../src/parsers/parseStringYear.js";

export default suite([
	{
		given: "in 1989",
		must: "return *",
		received: parseStringYear("1989"),
		wanted: 1989,
	},
	{
		given: "every year",
		must: "return *",
		received: parseStringYear(CRON_EVERY),
		wanted: CRON_EVERY,
	},
	{
		given: "every 10 years starting in 1989",
		must: "return CronRange",
		received: parseStringYear("1989/10"),
		wanted: { every: 10, start: 1989 },
	},
	{
		given: "every 10 years starting in 1970",
		must: "return CronRange",
		received: parseStringYear("*/10"),
		wanted: { every: 10, start: CRON_EVERY },
	},
	{
		given: "in 1989, 1991, 2015 and 2020",
		must: "return CronList",
		received: parseStringYear("1989,1991,2015,2020"),
		wanted: [1989, 1991, 2015, 2020],
	},
	{
		given: "between 1989 and 2020",
		must: "return CronRange",
		received: parseStringYear("1989-2020"),
		wanted: { from: 1989, to: 2020 },
	},
	{
		given: "in 1989, 1991, 2015 and 2020, and between 1989 and 2020",
		must: "return CronList with CronRange int it",
		received: parseStringYear("1989,1991,2015,2020,1989-2020"),
		wanted: [1989, 1991, 2015, 2020, { from: 1989, to: 2020 }],
	},
	{
		given: "invalid value",
		must: "return undefined",
		received: parseStringYear("INVALID"),
		wanted: undefined,
	},
	{
		given: "invalid value in list",
		must: "return undefined",
		received: parseStringYear("1,2,3,4,INVALID"),
		wanted: undefined,
	},
]);
