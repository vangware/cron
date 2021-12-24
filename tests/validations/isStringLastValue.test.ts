import { suite } from "@vangware/test";
import { isStringLastValue } from "../../src/validations/isStringLastValue.js";

export default suite([
	{
		given: "a valid last value",
		must: "return true",
		received: isStringLastValue("7L"),
		wanted: true,
	},
	{
		given: "a valid lowercase last value",
		must: "return true",
		received: isStringLastValue("7l"),
		wanted: true,
	},
	{
		given: "an invalid last value with 3 digits",
		must: "return false",
		received: isStringLastValue("100L"),
		wanted: false,
	},
	{
		given: "an valid value",
		must: "return false",
		received: isStringLastValue("INVALID"),
		wanted: false,
	},
]);
