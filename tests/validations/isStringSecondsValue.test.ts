import { suite } from "@vangware/test";
import { isStringSecondsValue } from "../../src/validations/isStringSecondsValue.js";

export default suite([
	{
		given: "a valid number value in the range 0-59",
		must: "return true",
		received: isStringSecondsValue("30"),
		wanted: true,
	},
	{
		given: "an invalid number outside the range 0-59",
		must: "return false",
		received: isStringSecondsValue("80"),
		wanted: false,
	},
	{
		given: "an invalid value",
		must: "return false",
		received: isStringSecondsValue("INVALID"),
		wanted: false,
	},
]);
