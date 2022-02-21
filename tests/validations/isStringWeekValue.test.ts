import type { Tests } from "@vangware/test";
import { isStringWeekValue } from "../../src/validations/isStringWeekValue.js";

export default [
	{
		given: "a valid number value in the range 1-5",
		must: "return true",
		received: isStringWeekValue("2"),
		wanted: true,
	},
	{
		given: "an invalid number outside the range 1-5",
		must: "return false",
		received: isStringWeekValue("8"),
		wanted: false,
	},
	{
		given: "an invalid value",
		must: "return false",
		received: isStringWeekValue("INVALID"),
		wanted: false,
	},
] as Tests<boolean>;
