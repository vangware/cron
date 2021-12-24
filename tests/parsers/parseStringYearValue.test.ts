import { suite } from "@vangware/test";
import { parseStringYearValue } from "../../src/parsers/parseStringYearValue.js";

export default suite([
	{
		given: "a valid number between 1970 and 2099",
		must: "return that number",
		received: parseStringYearValue("1989"),
		wanted: 1989,
	},
	{
		given: "an invalid number outside 1970 and 2099",
		must: "return undefined",
		received: parseStringYearValue("3000"), // There is no future for cron
		wanted: undefined,
	},
]);
