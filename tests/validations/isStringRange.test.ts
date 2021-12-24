import { suite } from "@vangware/test";
import { isStringRange } from "../../src/validations/isStringRange.js";

export default suite([
	{
		given: "a valid range (number-number)",
		must: "return true",
		received: isStringRange("10-20"),
		wanted: true,
	},
	{
		given: "a value with multiple hyphens",
		must: "return false",
		received: isStringRange("13-10-1989"),
		wanted: false,
	},
	{
		given: "a value without hyphens",
		must: "return false",
		received: isStringRange("value"),
		wanted: false,
	},
]);
