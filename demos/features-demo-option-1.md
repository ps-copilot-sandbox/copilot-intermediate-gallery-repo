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

## 🎯 Step 1: Discover Available Features

Mode: Ask <br>
Delegate session: Local

**Goal:** Learn what GitHub Copilot can do for you in Ask mode.

**1:** Type the following slash command in the Copilot chat:

**Prompt:**
```markdown
/
```

Scroll through the available commands listed in the dropdown.

**2:** View the available tools by typing the following in the Copilot chat:

**Prompt:**
```markdown
#
```

Scroll through the available commands listed in the dropdown.

**3:** Do the same for viewing available chat participants:

**Prompt:**
```markdown
@
```

Scroll through the available chat participants listed in the dropdown.

**Expected Result:** You'll see a list of available commands and features.

---

## 📚 Step 2: Learn About the Project

### 2.1 Get Project Overview
**Prompt:**
```markdown
Give me a summary of the project and give an overview of the most impactful files. 
```

**Follow-up Action:**
- Select the first page in the "Most Impactful Files"
- Highlight the first section

### 2.2 Explain Selected Code
**Prompt:**
```markdown
/explain 
```

**What this does:** Copilot will explain the highlighted code section in detail.

### 2.3 Get Improvement Suggestions
**Prompt:**
```markdown
Tell me about the improvements that can be made in this repo.
```

**💡 Pro Tip:** Copilot can help not only with learning but also with planning and ideas!

## 💻 Step 3: Generate Code with Copilot code completions

Keep the Copilot Chat session, we will be using it in Step 4 to plan and implement. For this step, utilize inline code completions directly in your editor to generate the footer code.

### Code Completions Instructions
1. **Navigate to file:** Open [`src/app/layout.tsx`](src/app/layout.tsx)
2. **Find location:** Go to line 52 `{/* REPLACE THIS COMMENT */}`
3. **Remove line 52 comment:** and replace it with the following comment:

```tsx
{/* Create a footer for this section. It should contain the logo and copyright information. */}
```

5. **Wait for suggestion:** Copilot will suggest code automatically
6. **Accept suggestion:** Press `Tab` to accept or `Esc` to dismiss
7. **Check your changes:** Save the file and refresh [http://localhost:3000](http://localhost:3000) to see your new footer

## 📝 Step 4: Plan and implement

Mode: Plan
Delegate session: Local

**Goal:** Pick one improvement, create a plan, then implement and verify.

Open Copilot Chat window with the list of improvements suggested for the project. Choose one of the improvements you would like to implement and follow the steps below.

If you are unsure which improvement to pick, we have provided a suggested implementation option to continue the demo.

<details>
<summary>Implementation option</summary>
Fix pagination in GalleryGrid.tsx: Change startIndex from 0 to (currentPage - 1) * photosPerPage so that page navigation actually shows different photos instead of repeating the same set.
</details>
<br>

1. Select Plan mode in Copilot Chat
2. Ask Copilot to generate a step-by-step implementation plan for your chosen improvement. Example prompt can be found in the `Implementation option` above.
3. Look over the generated plan and answer any questions that might pop up in chat. You can select an option, or type in a custom response.
4. Once approved, select `Start Implementation`
5. Review and accept changes

**What to notice**

- You can customize the plan and give more details to Copilot during the plan phase
- Once implementation starts, the mode switch from `plan` to `agent`
- Copilot lists out the `Todos` and guides you through each step it is taking.

## 📊 Step 5: Review and Commit Your Changes

### Option A: Inline AI-Powered Review

1. **Select generated code:** Highlight the code that was created
2. **Open Copilot menu:** Right-click → Select "Copilot"
3. **Get review:** Choose "Review and Comment"
4. **Process feedback:** Review suggestions and accept/discard as needed

### Option B: Source Code AI-Powered Review

1. **Select Source Control in the Activity Bar:** Click the Source Control icon in the left sidebar to open the source control panel.
2. **Start review:** At the top of the Source Control view, hover over CHANGES, then click the  Copilot Code Review - Uncommitted Changes button.
3. **View comments:** If Copilot has any comments, they will be shown inline in your file(s), and in the Problems tab.

### Option C: Manual Review

1. **Read the code:** Review what was generated
2. **Check functionality:** Does it match the requirements?
3. **Verify style:** Does it follow the project's coding standards?

### Commit Your Changes
1. **Open Source Control:** Click the Source Control icon in the left sidebar
2. **Generate commit message:** Hover over the commit message box → Click "Generate Commit Message with Copilot"
3. **Review and edit:** Modify the generated message if needed
4. **Commit:** Click "Commit" then "Sync Changes" to push

**🎉 Success indicator:** You should see your changes in the git history!

## ✅ Completion Checklist

Mark off each item as you complete it:

- [ ] Viewed available slash commands, tools, and chat participants successfully
- [ ] Got project summary
- [ ] Explained code with `/explain`
- [ ] Generated footer code with AI
- [ ] Planned and implemented project improvement
- [ ] Reviewed the generated code
- [ ] Committed changes to git

## 🚀 What's Next?

Congratulations! You've completed your first GitHub Copilot demo.

👉 **[Start Engineering Practices Demo](./engineering-practices.md)**
