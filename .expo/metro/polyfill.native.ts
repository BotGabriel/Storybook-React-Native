// main.ts
globalThis.$$require_external = (moduleId: string) => {
  throw new Error(`Node.js standard library module ${moduleId} is not available in this JavaScript environment`);
};
