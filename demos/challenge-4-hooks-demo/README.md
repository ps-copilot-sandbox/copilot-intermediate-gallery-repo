# Hooks Demo: Deterministic Broken-Link Validation

## What this demonstrates

Instructions can ask an agent to check every link. The `fix-broken-links` hook runs an executable HTTP check after an edit, so validation does not depend on the model remembering the request.

The demo fixture contains one working URL and one intentionally unreachable URL. It is kept broken in this Draft PR so the audience can reproduce the check.

## Without the hook

Open `link-check-fixture.md` after an agent edit. The file is syntactically valid Markdown and the edit can complete without reporting that the workshop URL is unreachable.

## With the hook

Run the deterministic report-only path:

```bash
FIX_BROKEN_LINKS_REPORT_ONLY=1 \
  .github/hooks/fix-broken-links/link-fix.sh \
  demos/challenge-4-hooks-demo/link-check-fixture.md
```

Expected result:

```text
Checking 2 link(s) in demos/challenge-4-hooks-demo/link-check-fixture.md ...
  BROKEN (000) https://example.invalid/copilot-workshop
```

The verified run completed in about 0.28 seconds on macOS using the system Bash 3.2.

## Simulated `postToolUse` payload

The hook can discover the edited file from the lifecycle payload:

```bash
printf '%s' '{"toolName":"create_file","tool_input":{"path":"demos/challenge-4-hooks-demo/link-check-fixture.md"}}' | \
  FIX_BROKEN_LINKS_REPORT_ONLY=1 \
  .github/hooks/fix-broken-links/link-fix.sh
```

This validates the same file-scoping path used by `postToolUse` without relying on a live model call during the presentation.

## Platform result

The original Bash implementation used Bash 4-only `mapfile` and associative arrays, while macOS ships Bash 3.2. The workshop branch replaces those features with indexed-array loops and adds `FIX_BROKEN_LINKS_REPORT_ONLY=1` to both Bash and PowerShell implementations.

The installed GitHub Copilot CLI version does not expose a `copilot hook` management command. For this environment, the safe live demo is direct script execution plus a simulated lifecycle payload. Automatic hook registration should only be claimed on a Copilot surface that confirms support for the repository's `hooks.json` format.

## Takeaway

Skills improve how the model approaches a task. Hooks execute a deterministic check around the model's work. The optional Copilot replacement suggestion is probabilistic, but URL detection itself is a shell command with observable output.
