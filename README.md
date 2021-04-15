![@vangware/cron logo](https://i.imgur.com/ZxqT2Wh.png)

![Build Status](https://img.shields.io/github/workflow/status/vangware/cron/Test.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/cron/actions)
![Coverage](https://img.shields.io/coveralls/github/vangware/cron.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://coveralls.io/github/vangware/cron)
![License](https://img.shields.io/npm/l/@vangware/cron.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/cron/blob/main/LICENSE)
![NPM Version](https://img.shields.io/npm/v/@vangware/cron.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://npm.im/@vangware/cron)
![Open Issues](https://img.shields.io/github/issues/vangware/cron.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/cron/issues)
![Size](https://img.shields.io/bundlephobia/minzip/@vangware/cron.svg?style=for-the-badge&labelColor=666&color=2b7&label=size&link=https://bundlephobia.com/result?p=@vangware/cron)

⏲️ Cron Quartz and Cron UNIX expression parser.

## Usage

### 📦 Node

```typescript
import { parseStringQuartz, parseCronQuartz } from "@vangware/cron";

const cron = parseStringQuartz("1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10");
/*
{
	seconds: { every: 3, start: { from: 1, to: 2 } },
	minutes: [{ from: 1, to: 2 }, 3, 4],
	hours: "*",
	dayOfMonth: { nearest: 2 },
	month: ["SEP", "OCT"],
	dayOfWeek: { last: 1 },
	year: { every: 10, start: "*" }
}
*/

parseCronQuartz(cron); // "1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10"
```

### 🦕 Deno

```typescript
import {
	parseStringQuartz,
	parseCronQuartz
} from "https://cdn.skypack.dev/@vangware/cron?dts";

const cron = parseStringQuartz("1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10");
/*
{
	seconds: { every: 3, start: { from: 1, to: 2 } },
	minutes: [{ from: 1, to: 2 }, 3, 4],
	hours: "*",
	dayOfMonth: { nearest: 2 },
	month: ["SEP", "OCT"],
	dayOfWeek: { last: 1 },
	year: { every: 10, start: "*" }
}
*/

parseCronQuartz(cron); // "1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10"
```

## Documentation

Documentation can be found [HERE](https://cron.vangware.com). It is auto-generated with [typedoc](https://typedoc.org/) based on the JSDocs and the types in the source. Shouldn't be necessary to read this, code editors like [VSCode](https://code.visualstudio.com/) integrate the documentation in the UI.

## Changelog

Changelog can be found [HERE](https://github.com/vangware/cron/blob/main/CHANGELOG.md).

## Test coverage

Test coverage can be found [HERE](https://coveralls.io/github/vangware/cron).
