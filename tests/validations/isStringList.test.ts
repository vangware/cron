import type { Tests } from "@vangware/test";
import { isStringList } from "../../src/validations/isStringList.js";

export default [
	{
		given: "a value with commas",
		must: "return true",
		received: isStringList("value,value,value"),
		wanted: true,
	},
	{
		given: "a value without commas",
		must: "return false",
		received: isStringList("value"),
		wanted: false,
	},
] as Tests<boolean>;
