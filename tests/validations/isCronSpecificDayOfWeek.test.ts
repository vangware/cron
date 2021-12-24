import { suite } from "@vangware/test";
import { isCronSpecificDayOfWeek } from "../../src/validations/isCronSpecificDayOfWeek.js";

export default suite([
	{
		given: "a valid specific day of week value",
		must: "return true",
		received: isCronSpecificDayOfWeek({ day: 1, week: 5 }),
		wanted: true,
	},
	{
		given: "an invalid specific day of week value with bigger numbers",
		must: "return false",
		received: isCronSpecificDayOfWeek({ day: 9, week: 9 }),
		wanted: false,
	},
	{
		given: "an valid value",
		must: "return false",
		received: isCronSpecificDayOfWeek("INVALID"),
		wanted: false,
	},
]);
