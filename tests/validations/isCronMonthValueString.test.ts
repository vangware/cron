import { suite } from "@vangware/test";
import { isCronMonthValueString } from "../../src/validations/isCronMonthValueString.js";

export default suite([
	{
		given: "a valid value in the range JAN-DEC",
		must: "return true",
		received: isCronMonthValueString("OCT"),
		wanted: true,
	},
	{
		given: "a valid value in the range JAN-DEC in lowercase",
		must: "return true",
		received: isCronMonthValueString("oct"),
		wanted: true,
	},
	{
		given: "an invalid value",
		must: "return false",
		received: isCronMonthValueString("OCTOBER"),
		wanted: false,
	},
]);
