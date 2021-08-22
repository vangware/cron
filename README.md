<img alt="Vangware's Cron" src="./logo.svg" height="192" />

![Build Status][build-status-badge]
![Coverage][coverage-badge]
![License][license-badge]
![NPM Version][npm-version-badge]
![Open Issues][open-issues-badge]

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
	parseCronQuartz,
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

Documentation can be found [HERE][documentation]. It is auto-generated with [typedoc][typedoc] based on the JSDocs and the types in the source. Shouldn't be necessary to read this, code editors like [VSCode][vscode] integrate the documentation in the UI.

## Changelog

Changelog can be found [HERE][changelog].

## Test coverage

Test coverage can be found [HERE][coverage].

<!-- Reference -->

[build-status-badge]: https://img.shields.io/github/workflow/status/vangware/cron/Test.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/cron/actions
[changelog]: https://github.com/vangware/cron/blob/main/CHANGELOG.md
[coverage-badge]: https://img.shields.io/coveralls/github/vangware/cron.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://coveralls.io/github/vangware/cron
[coverage]: https://coveralls.io/github/vangware/cron
[documentation]: https://cron.vangware.com
[license-badge]: https://img.shields.io/npm/l/@vangware/cron.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/cron/blob/main/LICENSE
[npm-version-badge]: https://img.shields.io/npm/v/@vangware/cron.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://npm.im/@vangware/cron
[open-issues-badge]: https://img.shields.io/github/issues/vangware/cron.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/cron/issues
[typedoc]: https://typedoc.org/
[vscode]: https://code.visualstudio.com/
