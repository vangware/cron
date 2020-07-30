import { test } from "@vangware/test";
import { splitExpression } from "../../src/parsers/splitExpression";

export default test([
	{
		given: "an expression with 5 values",
		must: "return undefined",
		received: splitExpression("1 1 1 1 1"),
		wanted: ["*", "1", "1", "1", "1", "1", "*"]
	},
	{
		given: "an expression with 6 values (year)",
		must: "return undefined",
		received: splitExpression("1 1 1 1 1 1989"),
		wanted: ["*", "1", "1", "1", "1", "1", "1989"]
	},
	{
		given: "an expression with 6 values (seconds)",
		must: "return undefined",
		received: splitExpression("1 1 1 1 1 1"),
		wanted: ["1", "1", "1", "1", "1", "1", "*"]
	},
	{
		given: "an expression with 7 values",
		must: "return undefined",
		received: splitExpression("1 1 1 1 1 1 1"),
		wanted: ["1", "1", "1", "1", "1", "1", "1"]
	},
	{
		given: "a valid expression with extra spaces",
		must: "return undefined",
		received: splitExpression(" 1  1   1    1    1   1  1 "),
		wanted: ["1", "1", "1", "1", "1", "1", "1"]
	},
	{
		given: "an invalid expression more than 7 values",
		must: "return undefined",
		received: splitExpression("1 1 1 1 1 1 1 1"),
		wanted: undefined
	},
	{
		given: "an invalid expression with less than 5 values",
		must: "return undefined",
		received: splitExpression("1 1 1 1"),
		wanted: undefined
	}
]);
