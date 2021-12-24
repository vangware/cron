import { suite } from "@vangware/test";
import { validateOr } from "../../src/utils/validateOr.js";

const value = "1";

export default suite([
	{
		given: "an empty list of validations",
		must: "return false",
		received: validateOr([])(value),
		wanted: false,
	},
	{
		given: "a list of validations where all pass",
		must: "return true",
		received: validateOr([
			item => item === "1",
			item => parseInt(item as string, 10) === 1,
		])(value),
		wanted: true,
	},
	{
		given: "a list of validations where some pass and some not",
		must: "return true",
		received: validateOr([
			item => item === "1",
			item => parseInt(item as string, 10) === 2,
		])(value),
		wanted: true,
	},
	{
		given: "a list of validations where none pass",
		must: "return false",
		received: validateOr([
			item => item === "2",
			item => parseInt(item as string, 10) === 2,
		])(value),
		wanted: false,
	},
]);
