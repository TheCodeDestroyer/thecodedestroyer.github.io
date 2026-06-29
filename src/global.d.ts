// Ambient declarations for non-code side-effect imports.
// TypeScript 6 type-checks side-effect imports, so global stylesheet
// imports (e.g. `import './globals.css'`) need a matching module declaration.
declare module '*.css';
