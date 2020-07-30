![@vangware/cron logo](https://i.imgur.com/dWxWFJe.png)

![Build Status](https://img.shields.io/travis/vangware/cron.svg?style=for-the-badge&labelColor=333&color=20b075&link=https://travis-ci.org/github/vangware/cron)
![License](https://img.shields.io/npm/l/@vangware/cron.svg?style=for-the-badge&labelColor=333&color=20b075&link=https://github.com/vangware/cron/blob/master/LICENSE)
![NPM Version](https://img.shields.io/npm/v/@vangware/cron.svg?style=for-the-badge&labelColor=333&color=20b075&link=https://npm.im/@vangware/cron)
![Open Issues](https://img.shields.io/github/issues/vangware/cron.svg?style=for-the-badge&labelColor=333&color=20b075&link=https://github.com/vangware/cron/issues)
![Size](https://img.shields.io/bundlephobia/minzip/@vangware/cron.svg?style=for-the-badge&labelColor=333&color=20b075&label=size&link=https://bundlephobia.com/result?p=@vangware/cron)

Cron expression parser.

## Usage

### 📦 Node

```typescript
import { parseString, parseCron } from "@vangware/cron";

const cron = parseString("1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10");
/*
{
	seconds: { every: 3, start: { from: 1, to: 2 } },
	minutes: [{ from: 1, to: 2 }, 3, 4],
	hours: "*",
	dayOfWeek: { last: 1 },
	month: ["SEP", "OCT"],
	dayOfMonth: { nearest: 2 },
	year: { every: 10, start: "*" }
}
*/

pareCron(cron); // "1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10"
```

### 🦕 Deno

```typescript
import { parseString } from "http://cdn.pika.dev/@vangware/cron";

const cron = parseString("1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10");
/*
{
	seconds: { every: 3, start: { from: 1, to: 2 } },
	minutes: [{ from: 1, to: 2 }, 3, 4],
	hours: "*",
	dayOfWeek: { last: 1 },
	month: ["SEP", "OCT"],
	dayOfMonth: { nearest: 2 },
	year: { every: 10, start: "*" }
}
*/

pareCron(cron); // "1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10"
```
