import { suite } from "@vangware/test";
import { isCronNearestDayOfMonth } from "../../src/validations/isCronNearestDayOfMonth.js";

export default suite([
	{
		given: "a valid near value",
		must: "return true",
		received: isCronNearestDayOfMonth({ nearest: 10 }),
		wanted: true,
	},
	{
		given: "an invalid near value with 3 digits",
		must: "return false",
		received: isCronNearestDayOfMonth({ nearest: 100 }),
		wanted: false,
	},
	{
		given: "an valid value",
		must: "return false",
		received: isCronNearestDayOfMonth("INVALID"),
		wanted: false,
	},
]);
