# Change log

All notable changes to this project will be documented in this file.

-   This project adheres to [Semantic Versioning][semver].
-   This project uses [Gitmoji][gitmoji]

## 5.1.9

-   ⬆️ dependency upgrade.

## 5.1.8

-   ⬆️ dependency upgrade.

## 5.1.7

-   ⬆️ dependency upgrade.
-   📝 update `CHANGELOG.md` to use emojis instead of aliases.

## 5.1.6

-   ⬆️ dependency upgrade.

## 5.1.5

-   ⬆️ dependency upgrade.
-   🔧 add `"sideEffects": false` to `package.json`.

## 5.1.4

-   ⬆️ dependency upgrade.
-   📝 update docs.

## 5.1.3

-   ⬆️ dependency upgrade.

## 5.1.2

-   ⬆️ dependency upgrade.

## 5.1.1

-   ⬆️ dependency upgrade.

## 5.1.0

-   ⬆️ dependency upgrade.
-   🔥 remove `@vangware/utils` everywhere and use the new libs instead.
-   📝 update docs.

## 5.0.1

-   ⬆️ dependency upgrade.

## 5.0.0

-   ⬆️ dependency upgrade.
-   🚚 move to ESM only.
-   📝 improved docs.

## 4.1.11

-   ⬆️ dependency upgrade.
-   🎨 typedoc update.
-   🚨 update code based on new linting rules.

## 4.1.10

-   ⬆️ dependency upgrade.

## 4.1.9

-   🐛 fix but with light theme in docs.

## 4.1.8

-   ⬆️ dependency upgrade.

## 4.1.7

-   ⬆️ dependency upgrade.
-   ➖ remove `husky` :tada:
-   ➕ add `@arkweid/lefthook`.
-   🏗 change markdown files to use references.
-   🍱 update logo in `README.md`
-   🏗 update outDir to single `dist` directory.

## 4.1.6

-   ⬆️ dependency upgrade.

## 4.1.5

-   ⬆️ dependency upgrade.

## 4.1.4

-   ⬆️ dependency upgrade.

## 4.1.3

-   ⬆️ dependency upgrade.

## 4.1.2

-   ⬆️ dependency upgrade.
-   🔧 update GitHub actions.

## 4.1.1

-   ⬆️ dependency upgrade.
-   🎨 new prettier config.

## 4.1.0

-   ⬆️ dependency upgrade.
-   🔧 update `package.json` adding `lint:fix` script.
-   🔧 update `package.json` `docs` script.
-   🏗 update code with new linting rules.
-   📝 update docs.

## 4.0.15

-   ⬆️ dependency upgrade.

## 4.0.14

-   ⬆️ dependency upgrade.
-   🔧 update package.json adding `postpublish`.
-   📝 update docs theme.

## 4.0.13

-   🏷 better types.

## 4.0.12

-   ⬆️ dependency upgrade.

## 4.0.11

-   ⬆️ dependency upgrade.

## 4.0.10

-   ⬆️ dependency upgrade.

## 4.0.9

-   ⬆️ dependency upgrade.

## 4.0.8

-   👷 Add GitHub actions.
-   ⬆️ dependency upgrade.

## 4.0.7

-   ⬆️ dependency upgrade.
-   🏗 improve some type checks.
-   🏷 update typed imports/exports to be `import type { ...`.
-   ✅ add missing tests (100% coverage ;D).

## 4.0.6

-   ⬆️ dependency upgrade.
-   🔧 update travis config.
-   🐛 fix coveralls config.
-   📝 update README.md.

## 4.0.5

-   ⬆️ dependency upgrade.

## 4.0.4

-   ⬆️ dependency upgrade.

## 4.0.3

-   ⬆️ dependency upgrade.

## 4.0.2

-   ⬆️ dependency upgrade.

## 4.0.1

-   ⬆️ dependency upgrade.

## 4.0.0

-   ⬆️ major dependency upgrade (new TS version!).
-   🏗 improve tuples making use of the new TS feature.
-   🎨 logo update.

## 3.0.1

-   🐛 add missing export for utils.

## 3.0.0

-   ⬆️ dependency upgrade.
-   🚚 rename several utils to have either `Quartz` or `Unix` as suffix.
-   🏗 change step parser to have limits (returning `undefined` when limit is
    exceeded).
-   ✅ add all missing tests.

## 2.2.0

-   ✨ add `parseStringExpression` util.
-   ✨ add `parseStringUnixExpression` util.
-   🏗 change `splitExpression` util.

## 2.1.0

-   ✨ add `CronUnix` type.
-   ✨ add `CronQuartzExtension` type.
-   ✨ add `parseStringUnix` parser.
-   ✨ add `parseCronUnix` parser.
-   ⬆️ dependency upgrade.

## 2.0.1

-   ✏️ better docs.

## 2.0.0

-   🏗 had to change cron parsers to return undefined when invalid to be more
    consistent.
-   ✅ updated tests (have to add more later).

## 1.0.2

-   🐛 fix output issue for esm (too modern for everyone).

## 1.0.1

-   🐛 fix path issue for esm.

## 1.0.0

-   🎉 Initial commit.

<!-- References -->

[gitmoji]: https://gitmoji.dev/
[semver]: https://semver.org/
