# Skills Demo Results

## Task used for both runs

> Design and generate a test suite for `UploadZone` behavior. Include tests for drag-drop states, file-type validation, preview rendering, and one accessibility-focused test. Include Jest setup notes if missing. Output a test plan first, then test scaffolding.

The comparison uses the same component and test harness. The only intended variable is whether the `javascript-typescript-jest` skill provides the testing method.

## Without the skill

Run:

```bash
npm run test:no-skill -- --runInBand
```

Observed result:

- 2 tests generated
- 1 passed
- 1 failed
- about 3.05 seconds elapsed in the verified run
- the failing test assumes `data-testid="upload-input"`, which does not exist in `UploadZone`
- no drag-active, invalid-file, removal, or accessibility coverage

This artifact is intentionally left failing. It demonstrates code that looks plausible but was not grounded in the real component contract.

## With the skill

Run:

```bash
npm run test:skill -- --runInBand
```

Observed result after validating the generated suite against the real component:

- 7 tests generated
- 7 passed
- about 3.34 seconds elapsed in the verified run
- covers default rendering, drag-active state, valid image upload, invalid file rejection, preview removal, keyboard activation, and the file input's accepted types
- verifies `URL.revokeObjectURL` cleanup

The first skill-based run passed 6 of 7 tests. The removal assertion needed to wait for Framer Motion's asynchronous exit. This is intentional evidence that a skill improves the method but does not remove the need to execute and review the result.

## Takeaway

The skill did not make the model infallible. It supplied a repeatable testing method that produced broader coverage, better interaction APIs, accessibility checks, and setup guidance. Deterministic test execution still provided the final quality gate.

Exact token counts are not included because the local VS Code session store does not expose per-turn token usage. The comparison therefore reports observable cost signals: elapsed time, test count, first-pass result, and correction loops.
