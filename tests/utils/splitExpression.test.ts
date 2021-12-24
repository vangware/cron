import { suite } from "@vangware/test";
import { splitExpression } from "../../src/utils/splitExpression.js";

export default suite([
	{
		given: "a list of values with multiple spaces in between",
		must: "return array containing the trimmed values",
		received: splitExpression("  1  2   3    4     5 "),
		wanted: ["1", "2", "3", "4", "5"],
	},
	{
		given: "a list of values with single spaces in between",
		must: "return array containing the trimmed values",
		received: splitExpression("1 2 3 4 5"),
		wanted: ["1", "2", "3", "4", "5"],
	},
	{
		given: "a value without spaces",
		must: "return array containing only that value",
		received: splitExpression("12345"),
		wanted: ["12345"],
	},
]);
