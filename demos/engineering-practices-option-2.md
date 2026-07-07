# Engineering Practices Demo

Welcome to the GitHub Copilot engineering practices demo. In this demo, we will practice context engineering as a repeatable system, not just prompt wording.

The goal is to show that the best results usually come from minimal sufficient context: not too little, not too much, just the right context packet for the task.

## What You'll Learn
By the end of this demo, you will:
- [ ] Know when to start a new chat for a new topic
- [ ] Track credit usage before and after tasks
- [ ] Select files based on task scope
- [ ] Build a small context packet with clear rules, examples, and validation
- [ ] Compare outcomes between weak, focused, and overloaded context setup

**Estimated Time:** 10-15 minutes

## Core Method: The Context Packet

Use this lightweight structure before implementation:

1. **Rules**
	- What must stay unchanged?
	- What is out of scope?
2. **Scope**
	- Which file should be edited?
	- Which files are optional only if strictly necessary?
3. **Examples**
	- Which existing file or pattern should the agent follow?
4. **Validation**
	- What exact behaviors must work when the task is done?

This keeps the exercise aligned with context engineering principles: give the agent the right rules, the right patterns, and the right checks.

## Context Layers

Good context engineering uses two layers:

1. **Project-wide context**
	- Stable guidance such as repo instructions, architecture notes, and contributor rules
	- Best for conventions the agent should know across many tasks
2. **Task-specific context**
	- The selected files, scope, constraints, examples, and validation for one task
	- Best for keeping the current chat focused and cheap

For this exercise, focus mostly on task-specific context. For larger work, combine both layers.

## Workflow by Phase

For small tasks, one focused chat is usually enough.

For larger tasks, separate the phases:

1. **Plan** in one chat
2. **Implement** in a fresh chat with the approved plan
3. **Review or test** in another fresh chat if the task grows

This reduces context mixing and keeps each phase easier for the agent to follow.

## 🎯 Challenge One: Run the Same Task Three Ways

For this challenge, use one small task so outcomes are easy to compare.

Task for all options:
- Improve modal close behavior in [GalleryGrid](../src/components/gallery/GalleryGrid.tsx):
	- Escape closes modal
	- Backdrop click closes modal
	- Clicking inside modal content does not close it

### Option 1: Low-Context Workflow

Use this option first to show the baseline failure mode.

1. Stay in an existing chat even if it was about a different topic.
2. Do not check your credit usage before starting.
3. Do not attach/select any specific files.
4. Use a vague prompt.

Prompt example:

```text
Can you improve this gallery thing and make the modal better?
```

Observe what happens:
- More clarification turns
- Less predictable output
- More unnecessary context discovery

**Features to use**
- Agent mode
- Auto model selection

### Option 2: Minimal Sufficient Context Workflow

Use this option second. This is the recommended pattern.

1. Start a new chat because this is a new topic.
2. Check credit usage in the top-right corner before you begin.
3. Select only task-relevant files:
	- [GalleryGrid](../src/components/gallery/GalleryGrid.tsx)
	- one additional file only if strictly necessary
4. Build a small context packet before writing the prompt:
	- Rules: keep styling unchanged, no unrelated refactors
	- Scope: work in [GalleryGrid](../src/components/gallery/GalleryGrid.tsx) unless blocked
	- Examples: use nearby component patterns only if needed
	- Validation: all 3 modal interactions must work
5. Use a structured prompt with scope, requirements, constraints, and done criteria.

Suggested prompt:

```text
Implement a small modal behavior update for the gallery.

Context packet:
- Rules: keep visual styling unchanged; do not refactor unrelated code.
- Scope: work only in GalleryGrid.tsx unless another file is strictly necessary.
- Validation: Escape closes modal, backdrop click closes modal, clicking inside modal content does not close it.

Scope:
- Work only in GalleryGrid.tsx unless another file is strictly necessary.

Requirements:
1. Pressing Escape closes the modal.
2. Clicking the backdrop closes the modal.
3. Clicking inside the modal content does not close it.

Constraints:
- Keep visual styling unchanged.
- Do not refactor unrelated code.

Done criteria:
- All 3 interactions work.
- Provide a short summary of changed lines and why.
```

6. After implementation, check credit usage again and compare with Option 1.

**Features to use**
- New chat
- Context attachments (file selection)
- Model picker
- Agent mode

### Option 3: Overloaded Context Workflow

Use this option third to show that more context is not always better.

1. Start a new chat.
2. Check credit usage before starting.
3. Attach the target file plus several loosely related or unrelated files.
   Suggested extras:
	- [gallery page](../src/app/gallery/page.tsx)
	- [upload page](../src/app/upload/page.tsx)
	- [UploadZone](../src/components/upload/UploadZone.tsx)
	- one demo markdown file
4. Use a prompt that still includes the requirements, but do not narrow the scope strongly.

Prompt example:

```text
Improve the gallery modal behavior.

Requirements:
- Escape closes modal.
- Backdrop click closes modal.
- Clicking inside modal content does not close it.

Use the attached files for context.
```

Observe what happens:
- More tokens used to inspect irrelevant context
- Higher chance of unnecessary changes
- More diffuse reasoning about scope

**Features to use**
- New chat
- Context attachments
- Agent mode

### Option 4: Team Exercise with Copilot App

Use Copilot App to run this as a checklist-driven practice.

Prompt idea:

```text
Create a context-engineering checklist for this task:
- Start a new chat for a new topic
- Check credits before implementation
- Attach only task-relevant files
- Build a context packet: rules, scope, examples, validation
- Write a prompt with scope, requirements, constraints, done criteria
- Check credits after implementation and compare
```

Use the checklist while implementing the modal behavior task.

## 🎯 Challenge Two: Compare outcomes and reflect

After completing Challenge One, compare all three workflows.

### Option 1: Quick debrief in chat

Ask Copilot:

```text
Compare the low-context run, the minimal sufficient context run, and the overloaded context run.
Summarize differences in:
1) number of turns,
2) code diff quality,
3) credit usage,
4) amount of rework.
```

### Option 2: Team discussion prompts

Use these questions with the group:
1. Which run was more predictable?
2. Which run took fewer turns?
3. Which run used fewer credits?
4. Which run produced the smallest correct diff?
5. Which habits are we adopting as a team?

## ✅ Key habits to keep

1. New topic -> new chat.
2. New phase -> new chat when planning, implementation, and review start to mix.
2. Check credits before and after meaningful tasks.
3. Select files based on scope, not convenience.
4. Build a context packet: rules, scope, examples, validation.
5. Prefer minimal sufficient context over vague or overloaded context.

## Anti-Patterns to Avoid

1. Context dumping: attaching many files that do not help the decision.
2. Context mixing: planning, coding, debugging, and review in the same long chat.
3. Stale guidance: relying on instructions or examples that no longer match the codebase.
4. No validation: assuming the agent understood the task without checking behavior.

## 🚀 What's Next?

Great work. You have completed the engineering practices context demo.

👉 **[Start Features Demo](./features-demo-option-2.md)**

"I am switching topics, so I am opening a new chat. I will check credits now, then again at the end. I am selecting only the gallery modal file for this task. My context packet includes explicit rules, scope, and validation so the agent can act with less guesswork and lower token usage."

## Optional Follow-Up Exercise

Run the same task again with one or two extra files attached that are unrelated, and compare:
1. Turn count
2. Diff size
3. Credit usage
4. Whether the extra context improved anything meaningful

Use this to show that extra context often increases cost without increasing quality.