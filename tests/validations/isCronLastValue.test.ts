import { suite } from "@vangware/test";
import { isCronLastValue } from "../../src/validations/isCronLastValue.js";

export default suite([
	{
		given: "a valid last value",
		must: "return true",
		received: isCronLastValue({ last: 7 }),
		wanted: true,
	},
	{
		given: "an invalid last value with 3 digits",
		must: "return false",
		received: isCronLastValue({ last: 100 }),
		wanted: false,
	},
	{
		given: "an valid value",
		must: "return false",
		received: isCronLastValue("INVALID"),
		wanted: false,
	},
]);
