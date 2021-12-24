import { suite } from "@vangware/test";
import { isStringSteps } from "../../src/validations/isStringSteps.js";

export default suite([
	{
		given: "a value with one dash",
		must: "return true",
		received: isStringSteps("value/value"),
		wanted: true,
	},
	{
		given: "a value with multiple dashes",
		must: "return false",
		received: isStringSteps("value/value/value"),
		wanted: false,
	},
	{
		given: "a value without dashes",
		must: "return false",
		received: isStringSteps("value"),
		wanted: false,
	},
]);
