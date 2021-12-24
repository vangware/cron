import { suite } from "@vangware/test";
import { isCronMinutesValue } from "../../src/validations/isCronMinutesValue.js";

export default suite([
	{
		given: "a valid number value in the range 0-59",
		must: "return true",
		received: isCronMinutesValue(30),
		wanted: true,
	},
	{
		given: "an invalid number outside the range 0-59",
		must: "return false",
		received: isCronMinutesValue(80),
		wanted: false,
	},
	{
		given: "an invalid value",
		must: "return false",
		received: isCronMinutesValue("INVALID"),
		wanted: false,
	},
]);
