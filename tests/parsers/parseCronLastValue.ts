import { test } from "@vangware/test";
import { CRON_LAST } from "../../src/constants";
import { parseCronLastValue } from "../../src/parsers/parseCronLastValue";

export default test([
	{
		given: "a valid L",
		must: "return CronEvery",
		received: parseCronLastValue({ last: 1 }),
		wanted: `1${CRON_LAST}`
	},
	{
		given: "an invalid L",
		must: "return undefined",
		received: parseCronLastValue("INVALID"),
		wanted: undefined
	}
]);
