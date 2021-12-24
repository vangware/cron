import { suite } from "@vangware/test";
import { isCronSteps } from "../../src/validations/isCronSteps.js";

export default suite([
	{
		given: "a value with one dash",
		must: "return true",
		received: isCronSteps({ every: 10, start: "value" }),
		wanted: true,
	},
	{
		given: "a value with no start and invalid every",
		must: "return false",
		received: isCronSteps({ every: "invalid" }),
		wanted: false,
	},
	{
		given: "a value without dashes",
		must: "return false",
		received: isCronSteps("value"),
		wanted: false,
	},
]);
