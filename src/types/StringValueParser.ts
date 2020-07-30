/**
 * Parses a string into a value of given type or `undefined` if invalid
 */
export type StringValueParser<Value> = (value: string) => Value | undefined;
