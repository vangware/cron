import { suite } from "@vangware/test";
import { CRON_EVERY } from "../../src/constants.js";
import { parseStringSeconds } from "../../src/parsers/parseStringSeconds.js";

export default suite([
	{
		given: "at second 10 of...",
		must: "return *",
		received: parseStringSeconds("10"),
		wanted: 10,
	},
	{
		given: "every second",
		must: "return *",
		received: parseStringSeconds(CRON_EVERY),
		wanted: CRON_EVERY,
	},
	{
		given: "every 10 seconds starting at 2",
		must: "return CronRange",
		received: parseStringSeconds("2/10"),
		wanted: { every: 10, start: 2 },
	},
	{
		given: "every 10 seconds starting at 0",
		must: "return CronRange",
		received: parseStringSeconds("*/10"),
		wanted: { every: 10, start: CRON_EVERY },
	},
	{
		given: "At seconds 1, 2, 3 and 4",
		must: "return CronList",
		received: parseStringSeconds("1,2,3,4"),
		wanted: [1, 2, 3, 4],
	},
	{
		given: "every second between second 5 and 10",
		must: "return CronRange",
		received: parseStringSeconds("5-10"),
		wanted: { from: 5, to: 10 },
	},
	{
		given: "At seconds 1, 2, 3 and 4 and every second between 5 and 10",
		must: "return CronList with CronRange int it",
		received: parseStringSeconds("1,2,3,4,5-10"),
		wanted: [1, 2, 3, 4, { from: 5, to: 10 }],
	},
	{
		given: "invalid value",
		must: "return undefined",
		received: parseStringSeconds("INVALID"),
		wanted: undefined,
	},
	{
		given: "invalid value in list",
		must: "return undefined",
		received: parseStringSeconds("1,2,3,4,INVALID"),
		wanted: undefined,
	},
]);
