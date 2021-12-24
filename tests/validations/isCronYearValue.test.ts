import { suite } from "@vangware/test";
import { isCronYearValue } from "../../src/validations/isCronYearValue.js";

export default suite([
	{
		given: "a valid number value in the range 1970-2099",
		must: "return true",
		received: isCronYearValue(1989),
		wanted: true,
	},
	{
		given: "an invalid number outside the range 1970-2099",
		must: "return false",
		received: isCronYearValue(3000), // There is no future for Cron!
		wanted: false,
	},
	{
		given: "an invalid value",
		must: "return false",
		received: isCronYearValue("INVALID"),
		wanted: false,
	},
]);
