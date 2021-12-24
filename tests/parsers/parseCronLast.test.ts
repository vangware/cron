import { suite } from "@vangware/test";
import { CRON_LAST } from "../../src/constants.js";
import { parseCronLast } from "../../src/parsers/parseCronLast.js";

export default suite([
	{
		given: "a valid L",
		must: "return CronEvery",
		received: parseCronLast(CRON_LAST),
		wanted: CRON_LAST,
	},
	{
		given: "an invalid L",
		must: "return undefined",
		received: parseCronLast("INVALID"),
		wanted: undefined,
	},
]);
