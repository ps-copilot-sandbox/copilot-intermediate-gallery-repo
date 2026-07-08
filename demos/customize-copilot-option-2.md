# Customize Copilot Demo

Welcome to the GitHub Copilot customization challenge lab. This version is built around five advanced customization areas from awesome-copilot and uses this Photo Gallery repo for realistic tasks.

This option is intentionally designed as a separate track from Option 1 with non-overlapping exercises.

## What You'll Learn
By the end of this demo, you will:
- [ ] Write and validate instruction-driven outputs
- [ ] Use agent modes to produce role-specific outcomes
- [ ] Apply skills-style workflows with clear triggers and deliverables
- [ ] Design practical hook events for quality and safety checks
- [ ] Propose plugin-powered workflows for team productivity

**Estimated Time:** 25-30 minutes

---

## Reference Pages

- Instructions: https://awesome-copilot.github.com/instructions/
- Agents: https://awesome-copilot.github.com/agents/
- Skills: https://awesome-copilot.github.com/skills/
- Hooks: https://awesome-copilot.github.com/hooks/
- Plugin: https://awesome-copilot.github.com/plugins/

---

## 0) Setup

1. Open these files as Related Files before starting challenges:
   - `/src/components/upload/UploadZone.tsx`
   - `/src/components/gallery/GalleryGrid.tsx`
   - `/src/app/admin/page.tsx`
   - `/src/app/upload/page.tsx`
   - `/src/lib/mock-photo-data.ts`
   - `/src/lib/mock-tag-data.ts`
   - `/.github/copilot-instructions.md`
2. Keep Copilot in Agent mode unless a challenge says otherwise.
3. For each challenge, capture:
   - Prompt used
   - Output summary
   - Pass or fail against the success criteria

---

## 🎯 Challenge 1: Instructions

Goal: prove that instruction quality changes output quality.

Source: https://awesome-copilot.github.com/instructions/

1. Use this prompt:

```markdown
Read project instructions and propose a hardening plan for UploadZone.
Return exactly these sections:
1) Constraints from instructions
2) Proposed edits
3) Regression risks
4) Validation checklist
```

2. Run the same prompt twice:
   - First with `/.github/copilot-instructions.md` included
   - Then without it

3. Compare differences.

Success criteria:
- With instructions, output references repo conventions (TypeScript strictness, layout patterns, dark mode, component structure).
- Without instructions, output is more generic.

Stretch challenge:
- Ask Copilot to convert the validation checklist into a reusable pre-flight prompt snippet.

---

## 🎭 Challenge 2: Agents

Goal: use agent specialization to improve planning quality.

Source: https://awesome-copilot.github.com/agents/

1. Install and switch to **Blueprint Mode** from awesome-copilot agents.
2. Use this prompt:

```markdown
Design a resilient "bulk photo operations" flow for admin:
- multi-select in gallery grid
- bulk tag assignment/removal
- bulk download metadata export
- rollback strategy for failed operations
Include architecture decisions, guardrails, and a test matrix.
```

3. Switch to default Agent mode and run the same prompt.
4. Compare depth, structure, and implementation readiness.

Success criteria:
- Blueprint Mode output includes clear Overview, Requirements, Implementation Steps, and Testing.
- Blueprint Mode has fewer missing assumptions than default Agent mode.

Stretch challenge:
- Ask Blueprint Mode to split work into milestones for a 2-day sprint.

---


## 🧩 Challenge 3: Skills

Goal: run an actual awesome-copilot skill in a unique test-engineering workflow.

Source: https://awesome-copilot.github.com/skills/

Skill used in this challenge: **javascript-typescript-jest**

Skill reference: https://github.com/github/awesome-copilot/tree/main/skills/javascript-typescript-jest

1. Install or register the skill in VS Code:

- Preferred (VS Code flow): open **Chat: Open Customizations** -> **Skills** and add the shared skill to your workspace skills directory (for example `.github/skills/`).
- Confirm the skill appears in the slash menu by typing `/` or `/skills` in chat.

2. Optional CLI path (if available in your environment):

```bash
gh skills install github/awesome-copilot javascript-typescript-jest
```

3. Before running, review the shared skill instructions for safety and fit with your repo conventions.

4. Use this prompt:

```markdown
Use the javascript-typescript-jest skill to design and generate a Jest + React Testing Library
test suite for UploadZone behavior in this Next.js TypeScript repo.
Requirements:
- include tests for drag-drop states, file-type validation, and preview rendering
- include one accessibility-focused test (keyboard and aria behavior)
- include setup notes for jest config if missing
- output a test plan first, then test file scaffolding
```

5. Then run a follow-up prompt:

```markdown
Now expand the suite with edge-case tests:
- duplicate upload attempts
- very large file rejection behavior
- unsupported MIME type handling
Then provide a "test maintenance checklist" for future UI changes.
```

6. Evaluate whether output behaved like a reusable skill execution.

Success criteria:
- Output is structured, repeatable, and constrained.
- Artifact is directly usable to bootstrap a robust test suite for UploadZone.

Stretch challenge:
- Ask the skill to generate a coverage map linking each UploadZone requirement to one or more tests.

---

## 🪝 Challenge 4: Hooks

Goal: use a production-style safety hook that blocks risky tool operations.

Source: https://awesome-copilot.github.com/hooks/

Hook used in this challenge: **Tool Guardian**

Hook reference: https://awesome-copilot.github.com/hooks/#file=hooks%2Ftool-guardian%2FREADME.md

1. Set up Tool Guardian in this repo:

```bash
mkdir -p hooks
cp -r /path/to/downloaded/tool-guardian hooks/tool-guardian
chmod +x hooks/tool-guardian/guard-tool.sh
mkdir -p .github/logs/copilot/tool-guardian
echo ".github/logs/" >> .gitignore
```

2. Add a `hooks.json` config at repo root:

```json
{
   "version": 1,
   "hooks": {
      "preToolUse": [
         {
            "type": "command",
            "bash": "hooks/tool-guardian/guard-tool.sh",
            "cwd": ".",
            "env": {
               "GUARD_MODE": "block"
            },
            "timeoutSec": 10
         }
      ]
   }
}
```

3. Ask Copilot:

```markdown
Using Tool Guardian, propose project-specific threat patterns for this gallery repo.
Include one pattern each for:
- destructive git operation
- upload-related data loss risk
- high-risk shell command
For each pattern, include:
- regex pattern
- severity
- safer alternative
```

4. Run sample scenarios:

```markdown
Simulate Tool Guardian decisions for these tool inputs and label each as PASS, WARN, or BLOCK:
- git status
- git push --force origin main
- rm -rf .
- npm publish
Then explain which ones should be allowlisted (if any) for this repo.
```

Success criteria:
- Tool Guardian is configured on `preToolUse` with a clear `block` vs `warn` policy.
- Output clearly distinguishes blocked operations from warning-only scenarios.
- Suggestions include safer alternatives (`--force-with-lease`, safer delete patterns, dry-run).

Stretch challenge:
- Add a small allowlist policy and explain when to use `TOOL_GUARD_ALLOWLIST` versus editing patterns.

---

## 🔌 Challenge 5: Plugins

Goal: use one plugin end-to-end in a way that matches this repo and can be repeated by the team.

Source: https://awesome-copilot.github.com/plugins/

Plugin used in this challenge: **testing-automation**

Plugin reference: https://awesome-copilot.github.com/plugins/#file=plugins%2Ftesting-automation

1. Install and confirm plugin availability:

- VS Code path: open **Chat: Plugins**, search for `testing-automation`, and install.
- CLI path (optional):

```bash
copilot plugin install testing-automation@awesome-copilot
```

2. Ask Copilot for a repo-specific testing plan:

```markdown
Using the testing-automation plugin, create a test strategy for this Next.js TypeScript gallery repo.
Focus on:
- UploadZone interaction states and validation rules
- GalleryGrid filtering behavior
- Admin dashboard stats rendering
Return:
1) Test pyramid split (unit/integration/e2e)
2) Tooling choices and why
3) High-risk scenarios
4) CI execution order
```

3. Ask for implementation-ready artifacts:

```markdown
Now generate implementation-ready artifacts from that plan:
- one sample unit test for UploadZone
- one integration test outline for GalleryGrid filtering
- one Playwright e2e scenario for upload -> gallery visibility
- a minimal "runbook" for local and CI execution
Keep output aligned with this repo's existing TypeScript and component structure.
```

4. Ask for quality and safety hardening:

```markdown
Review the generated tests and add safeguards:
- flaky test prevention notes
- deterministic test-data strategy
- cleanup/isolation requirements
- what should fail fast in CI
```

Success criteria:
- Plugin outputs are concrete enough for a new team member to run without extra context.
- Generated examples map directly to UploadZone, GalleryGrid, and admin areas in this repo.
- Safety guidance includes flake prevention and deterministic test setup.

Stretch challenge:
- Ask for a fallback path that does not require plugin access and compare quality.

---

## Scorecard Template

Use this quick scorecard for each challenge:

- Output quality (1-5)
- Reusability (1-5)
- Repo alignment (1-5)
- Safety (1-5)
- Notes: what to keep, what to improve

---

## Discussion Prompts

1. Which customization area gave the biggest quality improvement?
2. Where did generic prompting still outperform structured methods?
3. What should become team standard in this repo next week?

---

## ✅ Completion Checklist

Mark off each item as you complete it:

- [ ] Completed the Instructions challenge and captured before/after quality differences
- [ ] Completed the Agents challenge and compared mode behavior
- [ ] Completed the Skills challenge with a repeatable trigger workflow
- [ ] Completed the Hooks challenge with an actionable hook policy
- [ ] Completed the Plugins challenge with one implementation-ready runbook
- [ ] Filled in a scorecard for all five challenges

## 🚀 What's Next?

Excellent work. You now have five advanced Copilot customization tracks you can apply in real delivery work.

Next ideas:
1. Turn your best challenge outputs into repo standards inside `.github` docs.
2. Add a short workshop debrief file with "before vs after" examples.
3. Re-run this lab in 30 days and compare maturity improvements.

---

👉 **[Start Copilot Spaces Demo](./copilot-spaces.md)**

