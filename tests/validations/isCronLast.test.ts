import { suite } from "@vangware/test";
import { CRON_LAST } from "../../src/constants.js";
import { isCronLast } from "../../src/validations/isCronLast.js";

export default suite([
	{
		given: "a L value",
		must: "return true",
		received: isCronLast(CRON_LAST),
		wanted: true,
	},
	{
		given: "a value different than L",
		must: "return false",
		received: isCronLast("INVALID"),
		wanted: false,
	},
]);
