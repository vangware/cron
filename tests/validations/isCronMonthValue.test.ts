import { suite } from "@vangware/test";
import { isCronMonthValue } from "../../src/validations/isCronMonthValue.js";

export default suite([
	{
		given: "a valid number value in the range 1-12",
		must: "return true",
		received: isCronMonthValue(10),
		wanted: true,
	},
	{
		given: "a valid value in the range JAN-DEC",
		must: "return true",
		received: isCronMonthValue("OCT"),
		wanted: true,
	},
	{
		given: "a valid value in the range JAN-DEC in lowercase",
		must: "return true",
		received: isCronMonthValue("oct"),
		wanted: true,
	},
	{
		given: "an invalid value",
		must: "return false",
		received: isCronMonthValue("OCTOBER"),
		wanted: false,
	},
	{
		given: "an invalid number outside the range 1-12",
		must: "return false",
		received: isCronMonthValue(50),
		wanted: false,
	},
	{
		given: "an invalid value",
		must: "return false",
		received: isCronMonthValue("INVALID"),
		wanted: false,
	},
]);
