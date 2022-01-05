# Change log

All notable changes to this project will be documented in this file.

-   This project adheres to [Semantic Versioning][semver].
-   This project uses [Gitmoji][gitmoji]

## 5.0.1

-   :arrow_up: dependency upgrade.

## 5.0.0

-   :arrow_up: dependency upgrade.
-   :truck: move to ESM only.
-   :memo: improved docs.

## 4.1.11

-   :arrow_up: dependency upgrade.
-   :art: typedoc update.
-   :rotating_light: update code based on new linting rules.

## 4.1.10

-   :arrow_up: dependency upgrade.

## 4.1.9

-   :bug: fix but with light theme in docs.

## 4.1.8

-   :arrow_up: dependency upgrade.

## 4.1.7

-   :arrow_up: dependency upgrade.
-   :heavy_minus_sign: remove `husky` :tada:
-   :heavy_plus_sign: add `@arkweid/lefthook`.
-   :building_construction: change markdown files to use references.
-   :bento: update logo in `README.md`
-   :building_construction: update outDir to single `dist` directory.

## 4.1.6

-   :arrow_up: dependency upgrade.

## 4.1.5

-   :arrow_up: dependency upgrade.

## 4.1.4

-   :arrow_up: dependency upgrade.

## 4.1.3

-   :arrow_up: dependency upgrade.

## 4.1.2

-   :arrow_up: dependency upgrade.
-   :wrench: update GitHub actions.

## 4.1.1

-   :arrow_up: dependency upgrade.
-   :art: new prettier config.

## 4.1.0

-   :arrow_up: dependency upgrade.
-   :wrench: update `package.json` adding `lint:fix` script.
-   :wrench: update `package.json` `docs` script.
-   :building_construction: update code with new linting rules.
-   :memo: update docs.

## 4.0.15

-   :arrow_up: dependency upgrade.

## 4.0.14

-   :arrow_up: dependency upgrade.
-   :wrench: update package.json adding `postpublish`.
-   :memo: update docs theme.

## 4.0.13

-   :label: better types.

## 4.0.12

-   :arrow_up: dependency upgrade.

## 4.0.11

-   :arrow_up: dependency upgrade.

## 4.0.10

-   :arrow_up: dependency upgrade.

## 4.0.9

-   :arrow_up: dependency upgrade.

## 4.0.8

-   :construction_worker: Add GitHub actions.
-   :arrow_up: dependency upgrade.

## 4.0.7

-   :arrow_up: dependency upgrade.
-   :building_construction: improve some type checks.
-   :label: update typed imports/exports to be `import type { ...`.
-   :white_check_mark: add missing tests (100% coverage ;D).

## 4.0.6

-   :arrow_up: dependency upgrade.
-   :wrench: update travis config.
-   :bug: fix coveralls config.
-   :memo: update README.md.

## 4.0.5

-   :arrow_up: dependency upgrade.

## 4.0.4

-   :arrow_up: dependency upgrade.

## 4.0.3

-   :arrow_up: dependency upgrade.

## 4.0.2

-   :arrow_up: dependency upgrade.

## 4.0.1

-   :arrow_up: dependency upgrade.

## 4.0.0

-   :arrow_up: major dependency upgrade (new TS version!).
-   :building_construction: improve tuples making use of the new TS feature.
-   :art: logo update.

## 3.0.1

-   :bug: add missing export for utils.

## 3.0.0

-   :arrow_up: dependency upgrade.
-   :truck: rename several utils to have either `Quartz` or `Unix` as suffix.
-   :building_construction: change step parser to have limits (returning `undefined` when limit is exceeded).
-   :white_check_mark: add all missing tests.

## 2.2.0

-   :sparkles: add `parseStringExpression` util.
-   :sparkles: add `parseStringUnixExpression` util.
-   :building_construction: change `splitExpression` util.

## 2.1.0

-   :sparkles: add `CronUnix` type.
-   :sparkles: add `CronQuartzExtension` type.
-   :sparkles: add `parseStringUnix` parser.
-   :sparkles: add `parseCronUnix` parser.
-   :arrow_up: dependency upgrade.

## 2.0.1

-   :pencil: better docs.

## 2.0.0

-   :building_construction: had to change cron parsers to return undefined when invalid to be more consistent.
-   :white_check_mark: updated tests (have to add more later).

## 1.0.2

-   :bug: fix output issue for esm (too modern for everyone).

## 1.0.1

-   :bug: fix path issue for esm.

## 1.0.0

-   :tada: Initial commit.

<!-- References -->

[gitmoji]: https://gitmoji.dev/
[semver]: https://semver.org/
