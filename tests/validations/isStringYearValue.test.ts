import type { Tests } from "@vangware/test";
import { isStringYearValue } from "../../src/validations/isStringYearValue.js";

export default [
	{
		given: "a valid number value in the range 1970-2099",
		must: "return true",
		received: isStringYearValue("1989"),
		wanted: true,
	},
	{
		given: "an invalid number outside the range 1970-2099",
		must: "return false",
		received: isStringYearValue("3000"), // There is no future for Cron!
		wanted: false,
	},
	{
		given: "an invalid value",
		must: "return false",
		received: isStringYearValue("INVALID"),
		wanted: false,
	},
] as Tests<boolean>;
