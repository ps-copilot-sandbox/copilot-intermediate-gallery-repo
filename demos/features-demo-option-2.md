# Features Demo

Welcome to this repository! You're probably wondering what it is and how it works. We will be working with this repository for the duration of this training, so it's important to find out what it's doing now!

Let's start off by learning the different modes.

## What You'll Learn
By the end of this demo, you will:
- [ ] Understand GitHub Copilot's core features
- [ ] Know how to use chat participants and slash commands
- [ ] Be able to generate code with AI assistance
- [ ] Plan and implement changes using AI assistance
- [ ] Know how to review and commit AI-generated code

**Estimated Time:** 15-20 minutes

## 🚀 Getting Started

More information on installation can be found in the [README](../README.md) file. For a quick start, use the following steps:

1. **Open the repository in your IDE** (e.g., VS Code)
2. **Create new branch:** `git checkout -b USERNAME-copilot-exercises`
2. **Install packages**: Run `npm install` in the terminal
3. **Start the development server**: Run `npm run dev`
4. **Open the project in your browser**: Go to [http://localhost:3000](http://localhost:3000) for a live preview

Continue with the demo by following the steps below.

## 🎯 Challenge One: Improve gallery modal UX

For this challenge, we will improve the photo detail modal behavior in [GalleryGrid](../src/components/gallery/GalleryGrid.tsx). The goal is to make the modal feel polished and easier to use.

### Option 1: Copilot

Use inline suggestions to scaffold a few small UX improvements.

**Goal:** Improve modal interactions in [GalleryGrid](../src/components/gallery/GalleryGrid.tsx).

1. Open [GalleryGrid](../src/components/gallery/GalleryGrid.tsx).
2. Add modal close behaviors:
	- Pressing Escape closes the modal
	- Clicking the dark backdrop closes the modal
	- Clicking inside the modal content does not close it
3. Lock page scroll while the modal is open and restore it when closed.
4. Keep current modal content and layout unchanged.

**Definition of Done**
- Opening "View Details" shows the modal as it does now.
- Pressing Escape closes the modal.
- Clicking outside the modal content closes it.
- Clicking inside the modal content keeps it open.
- The page cannot scroll while the modal is open.

**Features to use**
- Inline suggestions
- Next edit suggestions

### Option 2: Copilot Chat

Use Chat to plan and implement the exact same fix.

Suggested prompt:

```text
In GalleryGrid.tsx, improve the photo detail modal UX:
1) close on Escape,
2) close on backdrop click,
3) keep open when clicking inside modal content,
4) disable page scroll while modal is open.
Please keep the current UI and content unchanged.
```

Then ask Copilot Chat to:
1. Explain the code changes in plain language.
2. Point to where each rule is implemented.
3. Suggest one small follow-up improvement.

**Features to use**
- Plan mode 
- Agent mode
- Model picker 
- Auto model selection

### Option 3: Copilot App

Use Copilot App to generate a task list and track completion.

Prompt idea:

```text
Create a small implementation checklist for improving modal UX in GalleryGrid.tsx:
- close on Escape
- close on backdrop click
- prevent close on modal content click
- lock body scroll while open
- quick manual test plan
```

Use the generated checklist while you implement the changes.

## 🎯 Challenge Two: Review your work

### Option 1: Inline AI-Powered Review

1. **Select generated code:** Highlight the code that was created
2. **Open Copilot menu:** Right-click → Select "Copilot"
3. **Get review:** Choose "Review and Comment"
4. **Process feedback:** Review suggestions and accept/discard as needed

### Option 2: Source Code AI-Powered Review

1. **Select Source Control in the Activity Bar:** Click the Source Control icon in the left sidebar to open the source control panel.
2. **Start review:** At the top of the Source Control view, hover over CHANGES, then click the  Copilot Code Review - Uncommitted Changes button.
3. **View comments:** If Copilot has any comments, they will be shown inline in your file(s), and in the Problems tab.
