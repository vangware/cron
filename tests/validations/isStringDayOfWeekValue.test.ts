import { suite } from "@vangware/test";
import { isStringDayOfWeekValue } from "../../src/validations/isStringDayOfWeekValue.js";

export default suite([
	{
		given: "a valid number value in the range 0-7",
		must: "return true",
		received: isStringDayOfWeekValue("5"),
		wanted: true,
	},
	{
		given: "a valid value in the range SUN-SAT",
		must: "return true",
		received: isStringDayOfWeekValue("FRI"),
		wanted: true,
	},
	{
		given: "a valid value in the range SUN-SAT in lowercase",
		must: "return true",
		received: isStringDayOfWeekValue("fri"),
		wanted: true,
	},
	{
		given: "an invalid value",
		must: "return false",
		received: isStringDayOfWeekValue("FRIDAY"),
		wanted: false,
	},
	{
		given: "an invalid number outside the range 0-7",
		must: "return false",
		received: isStringDayOfWeekValue("10"),
		wanted: false,
	},
	{
		given: "an invalid value",
		must: "return false",
		received: isStringDayOfWeekValue("INVALID"),
		wanted: false,
	},
]);
