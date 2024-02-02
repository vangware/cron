> This repository's code was moved to [lou.codes](https://lou.codes).

---

<img id="logo" alt="Cron by Vangware" src="./logo.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]

⏲️ Cron Quartz and Cron UNIX expression parser.

## Usage

### 📦 Node

Install `@vangware/cron` as a dependency:

```bash
pnpm add @vangware/cron
# or
npm install @vangware/cron
# or
yarn add @vangware/cron
```

Import it and use it:

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

Import `@vangware/cron` using the `npm:` prefix, and use it directly:

```typescript
import { parseStringQuartz, parseCronQuartz } from "npm:@vangware/cron";

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

### 🌎 Browser

Import `@vangware/cron` using [esm.sh][esm.sh], and use it directly:

```html
<script type="module">
	import {
		parseStringQuartz,
		parseCronQuartz,
	} from "https://esm.sh/@vangware/cron";

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
</script>
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

## To do

A **big** change is coming with stricter types and a better DX. Stay tuned.

<!-- Reference -->

[changelog]: https://github.com/vangware/cron/blob/main/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/cron.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://coveralls.io/github/vangware/cron
[coverage]: https://coveralls.io/github/vangware/cron
[documentation]: https://cron.vangware.com
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@vangware/cron.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/cron/blob/main/LICENSE
[npm-version-badge]:
	https://img.shields.io/npm/v/@vangware/cron.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://npm.im/@vangware/cron
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/cron.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/cron/issues
