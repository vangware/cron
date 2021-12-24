import { suite } from "@vangware/test";
import { isCronDayOfWeekValue } from "../../src/validations/isCronDayOfWeekValue.js";

export default suite([
	{
		given: "a valid number value in the range 0-7",
		must: "return true",
		received: isCronDayOfWeekValue(5),
		wanted: true,
	},
	{
		given: "a valid value in the range SUN-SAT",
		must: "return true",
		received: isCronDayOfWeekValue("FRI"),
		wanted: true,
	},
	{
		given: "a valid value in the range SUN-SAT in lowercase",
		must: "return true",
		received: isCronDayOfWeekValue("fri"),
		wanted: true,
	},
	{
		given: "an invalid value",
		must: "return false",
		received: isCronDayOfWeekValue("FRIDAY"),
		wanted: false,
	},
	{
		given: "an invalid number outside the range 0-7",
		must: "return false",
		received: isCronDayOfWeekValue(10),
		wanted: false,
	},
	{
		given: "an invalid value",
		must: "return false",
		received: isCronDayOfWeekValue("INVALID"),
		wanted: false,
	},
]);
