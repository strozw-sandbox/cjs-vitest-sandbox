
## Purpose

Tests whether vitest can be used in a commonjs project.

## How 

```sh 
corepack enable
pnpm install
pnpm vitest
```

## Result

|test code|result|
|---|---|
|src/commonjs.esm.test.js|passed|
|src/commonjs.test.js|failed|
|src/esm-syntax.test.js|passed|
|src/esm.test.mjs|passed|
|src/typescript.test.ts|passed|
