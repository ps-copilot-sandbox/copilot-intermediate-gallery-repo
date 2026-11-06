# Advanced Copilot Workshop - Session Handoff

Last updated: 28 September 2026

## Why this document exists

This is the portable context for continuing the workshop from another computer.
The VS Code chat transcript is local application data and is not a Git object.
Instead of publishing raw tool logs, local absolute paths, and editor metadata in
a public repository, this document preserves the decisions, evidence, current
state, and next actions needed to resume the work.

Keep the pull request containing this file as a Draft. The material is workshop
evidence, includes intentionally failing controls, and is not a production merge
candidate in its current form.

## Repository and remote model

- Upstream repository: `ps-copilot-sandbox/copilot-intermediate-gallery-repo`
- Personal fork: `uludagemre/copilot-intermediate-gallery-repo`
- Base branch: `main`
- Application: Next.js 15, React 19, TypeScript, Tailwind CSS
- Workshop comparison date: 27-28 September 2026

Work is published from user-prefixed branches on the personal fork into public
Draft PRs against upstream `main`. Branch protection requires CODEOWNERS review,
so do not bypass review or merge workshop artifacts during the presentation.

## Draft PR map

| Topic | Draft PR | Fork branch | Purpose |
| --- | --- | --- | --- |
| Agents | [#73](https://github.com/ps-copilot-sandbox/copilot-intermediate-gallery-repo/pull/73) | `emre/gallery-sort-control` | Compare direct implementation with Plan Agent-guided implementation. |
| Skills | [#74](https://github.com/ps-copilot-sandbox/copilot-intermediate-gallery-repo/pull/74) | `emre/skills-hooks-workshop` | Compare bare Jest test generation with the repository Jest skill. |
| Hooks | [#75](https://github.com/ps-copilot-sandbox/copilot-intermediate-gallery-repo/pull/75) | `emre/hooks-workshop` | Compare an unchecked edit with deterministic broken-link validation. |
| Session handoff | The Draft PR containing this file | `emre/workshop-session-handoff` | Carry workshop notes and continuation context to another computer. |

The three feature comparisons are intentionally separate. Do not recombine
Skills and Hooks into one PR; separating them makes each Copilot primitive easier
to present and review.

## Workshop thesis

Agentic coding changes review from supervising keystrokes to specifying and
verifying outcomes. The repository demonstrates three complementary controls:

| Primitive | What it controls | Guarantee level |
| --- | --- | --- |
| Agent | Role, tools, planning, and decision boundaries | Model-guided |
| Skill | Reusable method for performing a specialized task well | Model-guided |
| Hook | Executable check around tool use | Deterministic check |

Measure cost per correct outcome, not only first-response speed. Planning and
Skills may consume more context upfront but can avoid correction loops. Hooks are
different: they execute a check instead of relying on the model to remember one.

Do not claim exact token savings. The local VS Code session data did not expose
reliable per-turn token usage.

## Agents comparison

Task given to both approaches:

> Add a sort control to the gallery page: Newest, Most Liked, Most Viewed.

The direct version edited only `GalleryGrid.tsx`. The Plan Agent first inspected
the owning page, existing filter conventions, styling, and the `Photo` type.

| Scenario | First-pass result | Build | Elapsed | Scope | Key finding |
| --- | --- | --- | --- | --- | --- |
| Without Plan Agent | Failed | Exit 1 | 6.79s | 1 file, +14/-2 | Used optional `dateTaken` without a guard; also missed page-level state, pagination reset, styling, and accessible labeling. |
| With Plan Agent | Passed | Exit 0 | 11.65s | 2 files, +37/-5 | Used page-level state, reset pagination, handled missing dates, and composed filter, sort, then paginate. |

The no-Agent build failed with:

```text
Type error: Argument of type string | undefined is not assignable to Date
```

PR #73 contains the working implementation. The local artifacts in
`challenge-2-agents-demo/` preserve the task, plan, and conceptual with/without
diffs for presentation fallback.

## Skills comparison

The component under test is `src/components/upload/UploadZone.tsx`. The same
general testing task was compared with and without the repository's
`javascript-typescript-jest` skill.

| Scenario | Result | Tests | Elapsed | Evidence |
| --- | --- | --- | --- | --- |
| Without skill | Expected failure | 1 passed, 1 failed | 2.43s | Assumed nonexistent `data-testid="upload-input"`; narrow coverage. |
| With skill | Passed | 7 passed, 0 failed | 2.53s | Covers render, drag state, valid/invalid files, preview cleanup, keyboard access, and accepted types. |

Commands on the Skills branch:

```bash
npm install
npm run test:no-skill -- --runInBand
npm run test:skill -- --runInBand
```

The no-skill command is expected to exit nonzero. Keep that artifact failing: it
is the control for the workshop, not a test to repair before the comparison.

## Hooks comparison

The Hook checks URLs in edited files. The fixture is valid Markdown containing
one reachable URL and one intentionally unreachable URL.

| Scenario | Trigger | Validation | Result | Elapsed | Consequence |
| --- | --- | --- | --- | --- | --- |
| Without Hook | None | No HTTP check | Broken URL not reported | N/A | The edit appears complete and depends on the agent remembering a separate check. |
| With `postToolUse` Hook | Simulated `create_file` lifecycle payload | Finds two URLs and checks both with `curl` | Reports `BROKEN (000)` | 0.30s | Detection is executable, repeatable, and independent of model memory. |

Direct report-only validation:

```bash
FIX_BROKEN_LINKS_REPORT_ONLY=1 \
  .github/hooks/fix-broken-links/link-fix.sh \
  demos/challenge-4-hooks-demo/link-check-fixture.md
```

Simulated lifecycle validation:

```bash
printf '%s' '{"toolName":"create_file","tool_input":{"path":"demos/challenge-4-hooks-demo/link-check-fixture.md"}}' | \
  FIX_BROKEN_LINKS_REPORT_ONLY=1 \
  .github/hooks/fix-broken-links/link-fix.sh
```

Expected evidence:

```text
Checking 2 link(s) in demos/challenge-4-hooks-demo/link-check-fixture.md ...
  BROKEN (000) https://example.invalid/copilot-workshop
```

Report-only mode intentionally exits 0 after reporting. Direct invocation also
detected the URL in 0.67s. The Bash implementation was made compatible with the
default macOS Bash 3.2, and PowerShell received matching report-only behavior.

The installed GitHub Copilot CLI did not expose a Hook registration command.
Therefore, only claim automatic invocation on a Copilot surface that confirms
support for the repository's `hooks.json` format. For this workshop environment,
use direct execution and the simulated lifecycle payload.

## Why every PR is still Draft

- PR #73 still requires repository review and is retained as visible Agent demo
  evidence.
- PR #74 includes an intentionally failing no-skill control.
- PR #75 includes an intentionally broken URL fixture and a Hook workflow that
  needs review before production use.
- The handoff PR contains workshop notes and fallback artifacts, not a product
  feature.
- Draft PRs provide stable public URLs, diffs, comments, and review surfaces for
  the workshop without implying that the artifacts should be merged unchanged.

## Resume on another computer

Clone the personal fork, add upstream, and fetch all workshop branches:

```bash
git clone https://github.com/uludagemre/copilot-intermediate-gallery-repo.git
cd copilot-intermediate-gallery-repo
git remote add upstream https://github.com/ps-copilot-sandbox/copilot-intermediate-gallery-repo.git
git fetch --all --prune
```

Check out the handoff branch first, then switch to the branch relevant to the
demo being rehearsed:

```bash
git switch emre/workshop-session-handoff
git switch emre/gallery-sort-control
git switch emre/skills-hooks-workshop
git switch emre/hooks-workshop
```

Install dependencies only on a branch that needs application or Jest execution:

```bash
npm install
```

## Continuation prompt for Copilot

Use this after opening the repository on the other computer:

```text
Read demos/WORKSHOP_SESSION_HANDOFF.md and the open Draft PRs #73, #74, and #75.
Continue preparing the advanced Copilot workshop from the current published
state. Preserve the separation between Agents, Skills, and Hooks. Do not merge
the Draft PRs, do not repair intentionally failing controls, and do not claim
exact token counts. Before changing anything, report the checked-out branch,
working-tree status, and which Draft PR owns the requested work.
```

## Remaining decisions

- Rehearse timing and the spoken transition between Agents, Skills, and Hooks.
- Decide whether the Turkish philosophy notes become slides, speaker notes, or
  remain private preparation material after the workshop.
- Obtain required CODEOWNERS review before merging any production-worthy change.
- After the workshop, remove intentionally failing/broken fixtures and split any
  durable implementation into merge-ready PRs.
- Export the VS Code chat separately only if the verbatim conversation is needed;
  review it for local paths, prompts, and sensitive metadata before sharing.

## Important guardrails

- Do not fabricate measurements that were not captured.
- Do not represent the simulated Hook payload as verified automatic registration.
- Do not merge workshop controls unchanged.
- Preserve user-authored files and unrelated working-tree changes.
- Keep public PR descriptions explicit about why each PR exists and why it is a
  Draft.