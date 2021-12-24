import { suite } from "@vangware/test";
import { CRON_START_OR_BLANK } from "../../src/constants.js";
import { parseCronStartOrBlank } from "../../src/parsers/parseCronStartOrBlank.js";

export default suite([
	{
		given: "a valid ?",
		must: "return CronEvery",
		received: parseCronStartOrBlank(CRON_START_OR_BLANK),
		wanted: CRON_START_OR_BLANK,
	},
	{
		given: "an invalid ?",
		must: "return undefined",
		received: parseCronStartOrBlank("INVALID"),
		wanted: undefined,
	},
]);
