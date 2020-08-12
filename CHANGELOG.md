# Change log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](https://semver.org/).
This project uses [Gitmoji](https://gitmoji.carloscuesta.me/)

## 3.0.1

- :bug: add missing export for utils.

## 3.0.0

- :arrow_up: dependency upgrade.
- :truck: rename several utils to have either `Quartz` or `Unix` as suffix.
- :building_construction: change step parser to have limits (returning `undefined` when limit is exceeded).
- :white_check_mark: add all missing tests.

## 2.2.0

- :sparkles: add `parseStringExpression` util.
- :sparkles: add `parseStringUnixExpression` util.
- :building_construction: change `splitExpression` util.

## 2.1.0

- :sparkles: add `CronUnix` type.
- :sparkles: add `CronQuartzExtension` type.
- :sparkles: add `parseStringUnix` parser.
- :sparkles: add `parseCronUnix` parser.
- :arrow_up: dependency upgrade.

## 2.0.1

- :pencil: better docs.

## 2.0.0

- :building_construction: had to change cron parsers to return undefined when invalid to be more consistent.
- :white_check_mark: updated tests (have to add more later).

## 1.0.2

- :bug: fix output issue for esm (too modern for everyone).

## 1.0.1

- :bug: fix path issue for esm.

## 1.0.0

- :tada: Initial commit.
