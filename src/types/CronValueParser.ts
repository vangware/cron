import type { Maybe, Unary } from "@vangware/types";

/**
 * Parses a value into a string or `undefined` if invalid.
 */
export type CronValueParser<Value> = Unary<Value, Maybe<string>>;
