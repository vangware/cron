import { test } from "@vangware/test";
import { CRON_START_OR_BLANK } from "../../src/constants";
import { parseCronStartOrBlank } from "../../src/parsers/parseCronStartOrBlank";

export default test([
	{
		given: "a valid ?",
		must: "return CronEvery",
		received: parseCronStartOrBlank(CRON_START_OR_BLANK),
		wanted: CRON_START_OR_BLANK
	},
	{
		given: "an invalid ?",
		must: "return undefined",
		received: parseCronStartOrBlank("INVALID"),
		wanted: undefined
	}
]);
