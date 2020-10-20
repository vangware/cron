import { suite } from "@vangware/test";
import { parseCronRange } from "../../src/parsers/parseCronRange";
import { parseCronSecondsValue } from "../../src/parsers/parseCronSecondsValue";
import { CronSecondsValue } from "../../src/types/CronSecondsValue";

const parseCronRangeSeconds = parseCronRange(parseCronSecondsValue);

export default suite([
	{
		given: "a valid range",
		must: "return CronRange object",
		received: parseCronRangeSeconds({ from: 13, to: 10 }),
		wanted: "13-10"
	},
	{
		given: "an invalid range",
		must: "return undefined",
		received: parseCronRangeSeconds({
			from: 999 as CronSecondsValue,
			to: 999 as CronSecondsValue
		}),
		wanted: undefined
	}
]);
