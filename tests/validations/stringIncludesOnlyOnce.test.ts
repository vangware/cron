import type { Tests } from "@vangware/test";
import { stringIncludesOnlyOnce } from "../../src/validations/stringIncludesOnlyOnce.js";

const includesCommaOnce = stringIncludesOnlyOnce(",");

export default [
	{
		given: "valid value with once appearance",
		must: "return true",
		received: includesCommaOnce("a,b"),
		wanted: true,
	},
	{
		given: "invalid value with multiple appearances",
		must: "return false",
		received: includesCommaOnce("a,b,c"),
		wanted: false,
	},
	{
		given: "invalid value with no appearances",
		must: "return false",
		received: includesCommaOnce("a"),
		wanted: false,
	},
] as Tests<boolean>;
