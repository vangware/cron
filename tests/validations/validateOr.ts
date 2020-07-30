import { test } from "@vangware/test";
import { validateOr } from "../../src/validations/validateOr";

const value = "1";

export default test([
	{
		given: "an empty list of validations",
		must: "return false",
		received: validateOr([])(value),
		wanted: false
	},
	{
		given: "a list of validations where all pass",
		must: "return true",
		received: validateOr([
			item => item === "1",
			item => parseInt(item, 10) === 1
		])(value),
		wanted: true
	},
	{
		given: "a list of validations where some pass and some not",
		must: "return true",
		received: validateOr([
			item => item === "1",
			item => parseInt(item, 10) === 2
		])(value),
		wanted: true
	},
	{
		given: "a list of validations where none pass",
		must: "return false",
		received: validateOr([
			item => item === "2",
			item => parseInt(item, 10) === 2
		])(value),
		wanted: false
	}
]);
