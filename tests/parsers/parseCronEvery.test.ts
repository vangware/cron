import { suite } from "@vangware/test";
import { CRON_EVERY } from "../../src/constants.js";
import { parseCronEvery } from "../../src/parsers/parseCronEvery.js";
import type { CronEvery } from "../../src/types/CronEvery.js";

export default suite([
	{
		given: "a valid *",
		must: "return CronEvery",
		received: parseCronEvery(CRON_EVERY),
		wanted: CRON_EVERY,
	},
	{
		given: "an invalid *",
		must: "return undefined",
		received: parseCronEvery("INVALID" as CronEvery),
		wanted: undefined,
	},
]);
