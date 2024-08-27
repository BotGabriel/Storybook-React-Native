// main.ts
globalThis.$$require_external = typeof window === "undefined" ? require : () => null;
