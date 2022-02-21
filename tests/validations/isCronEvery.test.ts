import type { Tests } from "@vangware/test";
import { CRON_EVERY } from "../../src/constants.js";
import { isCronEvery } from "../../src/validations/isCronEvery.js";

export default [
	{
		given: "a * value",
		must: "return true",
		received: isCronEvery(CRON_EVERY),
		wanted: true,
	},
	{
		given: "a value different than *",
		must: "return false",
		received: isCronEvery("INVALID"),
		wanted: false,
	},
] as Tests<boolean>;
