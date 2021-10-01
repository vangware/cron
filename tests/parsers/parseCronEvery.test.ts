import { suite } from "@vangware/test";
import { CRON_EVERY } from "../../src/constants";
import { parseCronEvery } from "../../src/parsers/parseCronEvery";
import type { CronEvery } from "../../src/types/CronEvery";

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
