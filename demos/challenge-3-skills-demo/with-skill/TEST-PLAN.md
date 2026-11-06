# Test Plan — UploadZone (generated via `/javascript-typescript-jest` skill)

## Jest Setup Notes (missing from repo today)
`package.json` has no test runner. To run this suite, add:

```bash
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event ts-jest ts-node @types/jest
```

`jest.config.ts`:
```ts
import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEach: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
  transform: { '^.+\\.(t|j)sx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }] },
};
export default config;
```

`jest.setup.ts`:
```ts
import '@testing-library/jest-dom';
```

Add to `package.json` scripts: `"test": "jest"`.

## Scope
Component under test: `src/components/upload/UploadZone.tsx` (drag & drop upload with preview).

## Cases

| # | Area | Case | Notes |
|---|---|---|---|
| 1 | Render | Default prompt text shown | Baseline |
| 2 | Drag state | Root shows "Drop your images here!" while `isDragActive` | Simulate native `dragenter`/`dragover` on root (react-dropzone listens on the DOM node, not a custom prop) |
| 3 | File-type validation | Valid image (`.png`) is accepted → appears in preview list, `onUpload` called | Uses the real hidden `<input type="file">` from `getInputProps()` |
| 4 | File-type validation | Invalid type (`.pdf`) is silently rejected by the `accept` filter | **Gap found while planning**: component has no rejection UI/feedback — test only asserts it's *not* added and `onUpload` is not called with it. Flag this as a potential UX improvement, not just a test target. |
| 5 | Preview rendering | Removing a file via the × button removes it from the grid | Also assert `URL.revokeObjectURL` is called to avoid a real memory-leak regression |
| 6 | Accessibility (keyboard) | Dropzone root is keyboard reachable and pressing `Enter`/`Space` triggers the file picker (native `input.click()`) | react-dropzone wires this by default (`noKeyboard` is false) |
| 7 | Accessibility (aria) | Hidden file input remains in the accessibility tree with `accept` restricted to images | Confirms assistive tech users aren't offered invalid file types |

## Explicitly out of scope
- Real network upload (component only simulates progress via `setInterval`/`setTimeout` — not part of this component's contract, would belong to an integration test with the upload API).
