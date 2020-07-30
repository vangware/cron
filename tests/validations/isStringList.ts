import { test } from "@vangware/test";
import { isStringList } from "../../src/validations/isStringList";

export default test([
	{
		given: "a value with commas",
		must: "return true",
		received: isStringList("value,value,value"),
		wanted: true
	},
	{
		given: "a value without commas",
		must: "return false",
		received: isStringList("value"),
		wanted: false
	}
]);
