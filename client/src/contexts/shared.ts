export type DefineAction<T extends string, P = undefined> = { type: T } | { type: T, payload: P }
