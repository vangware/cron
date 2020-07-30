import { test } from "@vangware/test";
import { isCronDayOfWeekValueString } from "../../src/validations/isCronDayOfWeekValueString";

export default test([
	{
		given: "a valid value in the range SUN-SAT",
		must: "return true",
		received: isCronDayOfWeekValueString("FRI"),
		wanted: true
	},
	{
		given: "a valid value in the range SUN-SAT in lowercase",
		must: "return true",
		received: isCronDayOfWeekValueString("fri"),
		wanted: true
	},
	{
		given: "an invalid value",
		must: "return false",
		received: isCronDayOfWeekValueString("FRIDAY"),
		wanted: false
	}
]);
