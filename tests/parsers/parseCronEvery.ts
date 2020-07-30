import { test } from "@vangware/test";
import { CRON_EVERY } from "../../src/constants";
import { parseCronEvery } from "../../src/parsers/parseCronEvery";
import { CronEvery } from "../../src/types/CronEvery";

export default test([
	{
		given: "a valid *",
		must: "return CronEvery",
		received: parseCronEvery(CRON_EVERY),
		wanted: CRON_EVERY
	},
	{
		given: "an invalid *",
		must: "return undefined",
		received: parseCronEvery("INVALID" as CronEvery),
		wanted: undefined
	}
]);
