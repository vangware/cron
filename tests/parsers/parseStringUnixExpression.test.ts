import { suite } from "@vangware/test";
import { parseStringUnixExpression } from "../../src/parsers/parseStringUnixExpression.js";

export default suite([
	{
		given: "an expression with 5 values",
		must: "return a valid array",
		received: parseStringUnixExpression("1 1 1 1 1"),
		wanted: ["1", "1", "1", "1", "1"],
	},
	{
		given: "a valid expression with extra spaces",
		must: "return a valid array",
		received: parseStringUnixExpression(" 1   1    1    1   1 "),
		wanted: ["1", "1", "1", "1", "1"],
	},
	{
		given: "an invalid expression more than 5 values",
		must: "return undefined",
		received: parseStringUnixExpression("1 1 1 1 1 1"),
		wanted: undefined,
	},
	{
		given: "an invalid expression with less than 5 values",
		must: "return undefined",
		received: parseStringUnixExpression("1 1 1 1"),
		wanted: undefined,
	},
]);
