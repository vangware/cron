/**
 * Parses a value into a string or `undefined` if invalid.
 */
export type CronValueParser<Value> = (value: Value) => string | undefined;
