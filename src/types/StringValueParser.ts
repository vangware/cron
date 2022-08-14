import type { Maybe, Unary } from "@vangware/types";

/**
 * Parses a string into a value of given type or `undefined` if invalid
 */
export type StringValueParser<Value> = Unary<string, Maybe<Value>>;
