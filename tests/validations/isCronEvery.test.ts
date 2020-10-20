import { suite } from "@vangware/test";
import { CRON_EVERY } from "../../src/constants";
import { isCronEvery } from "../../src/validations/isCronEvery";

export default suite([
	{
		given: "a * value",
		must: "return true",
		received: isCronEvery(CRON_EVERY),
		wanted: true
	},
	{
		given: "a value different than *",
		must: "return false",
		received: isCronEvery("INVALID"),
		wanted: false
	}
]);
