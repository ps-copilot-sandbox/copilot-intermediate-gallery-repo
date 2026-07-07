# Customize Copilot Demo

Welcome to the GitHub Copilot customization demo! Here you'll learn how to tailor GitHub Copilot to your specific needs and workflow preferences. This demo covers advanced features that help you optimize your AI-assisted coding experience for maximum productivity.

## What You'll Learn
By the end of this demo, you will:
- [ ] Know how to monitor your premium request usage
- [ ] Switch between AI models in Chat and Code completions (OPTIONAL)
- [ ] Use prompt files for consistent AI interactions
- [ ] Utilize custom agent modes for various development tasks
- [ ] Set up custom instructions with MCP servers for personalized AI behavior

**Estimated Time:** 25-30 minutes

---

## 📊 Step 1: Monitor Premium Request

### Option A: Access the Premium Dashboard

In IDE:

1. **Open VS Code** and ensure GitHub Copilot is active
2. **Locate Copilot status:** Look for the GitHub Copilot logo in the bottom-right status bar

### Option B: Access the Premium Dashboard

In github.com:

1. **Navigate to GitHub:** Go to [https://github.com/settings/copilot/features](https://github.com/settings/copilot/features)
2. **Sign in:** Ensure you're logged into your GitHub account
3. **View dashboard:** Review your premium request usage percentage and limits

View premium request percentage to understand how many requests you have left.

---

## 🔄 Step 2: Advanced Model Switching (OPTIONAL)

Mode: agent

For this demo, try the same coding task with different models and note the differences.

### Instructions

1. Update your mode to **agent**. Should be the default mode.
2. Select the model you want to try out
3. Add the following files to the GitHub Copilot Chat UI as related files. You can do so but selecting `Add Context` and typing in the name of each file. OR close out all tabs, then open these three files. Select `Add Context`, then `Open Editors` to grab all open files in your IDE. Either way will gather the below files.
```markdown
- /src/app/gallery/page.tsx
- /src/lib/mock-photo-data.ts
- /src/components/GalleryGrid.tsx
```
4. Stay on the last page: GalleryGrid and highlight lines 26 - 43
5. Add in below prompt:

Prompt
```typescript
// Ask each model: "Help me refactor this function for better performance, readability, and add TypeScript improvements"
```

Repeat steps 2-5 for two other models of your choosing.

Which answers did you like the best? which the least? Discuss in your group.

---

## 📝 Step 3: Use Prompt Files

1. Go to the `/.github/prompts` folder and look through the files.
- There are two files to choose from each in varying difficult levels.
- Look over the format of each before choosing which one.
2. Choose the file you want to test out.
3. Add in the prompt below depending on the prompt file.

**Generate mock data**
Prompt
```markdown
/generate-mock-photo-data 3
```

**Refactor UI component**
Prompt
```markdown
/generate-new-ui for the recent galleries table in the admin page. I want it to be the replacement component for the current table and be reuseable.  Place it in the layout folder.
```

**BONAS CHALLENGE:** Create your own prompt file for unit tests

Ask copilot to generate a new prompt file for unit tests. Use the following steps:

1. Go to GitHub Copilot UI
2. Click on the gear icon in the top right corner
3. Select "Prompt Files"
4. Click the plus icon that says "New prompt file"
5. Select the folder you want to save the file in i.e `.github/prompts/`
6. Name the file 'generate-unit-tests.prompt.md'
7. Create your own custom prompt file with GitHub Copilot:

```markdown
<!-- Add in related files to Ask mode -->
Related files:
- /src/components/ui/FeatureCard.tsx
- /.github/prompts/generate-new-ui.prompt.md
- /.github/prompts/generate-mock-photo-data.prompt.md

<!-- Copy/paste prompt below -->
help me create a prompt files for creating unit test generation for the UI components.
```

## 🎭 Step 4: Utilize Custom Agent Modes

1. Look over the `Plan.agent.md` in the `.github/agents` file to see the expected behavior of the mode
2. Go to GitHub Copilot Chat
3. Update mode to "Plan" mode
4. Add in prompt below and look over the suggestion

```markdown
help me plan out a new page for creating new galleries
```
**DISCUSSION**
Look through response. What other modes would be helpful for this repo?

**If time permits**
Try implementing the changes from the plan using a different mode to explore how the experience varies.

## 🛠️ Step 5: Custom instructions and MCP Servers

### Understanding MCP Servers

Model Context Protocol (MCP) servers allow you to extend GitHub Copilot capabilities to external data sources. Custom instructions can help guide Copilot's behavior to align with your project's coding standards and conventions. This is particularly useful for large teams or complex projects where consistency is key.

**Prerequisites**
- GitHub Copilot License
- VSCode 1.99 or later
- MCP servers in Copilot enabled

### Part One: Get familiar with custom instructions

Custom instructions let you shape GitHub Copilot’s behavior to match your team’s coding style, best practices, and project conventions. With custom instructions, Copilot can automatically follow your preferred patterns, use your naming conventions, and even adapt to your workflow. Let's see what this repos custom instructions are:

1. Go to `.github/custom-instructions.md`
2. Look over the file. Have you noticed coding suggestions have been based around this file?

Now let's generate one with the help of GitHub Copilot.

1. Go to Copilot Chat
2. Select the gear icon on the top right
3. Click "Generate Instructions"

Look over this file and notice how its a good starting point for this project. You can remove or add any instructions your team has in mind!

Custom instructions works in tandem with MCP to help you guide the agent.

### Part Two: MCP Authentication

1. Go to `.vscode/mcp.json` and look over the configuration file. There are two options to choose from depending on your preference and version. For OAuth, refer to `Option A` below. For PAT instructions, refer to `Option B`

**Option A:** VSCode using OAuth (Version 1.101 or greater) Instructions

2. Look for server under `// Using OAuth (version 1.101 or greater)`
3. Click `start`
4. A pop up will appear for the authentication process which will say "The MCP Server Definition 'github' wants to authenticate to GitHub."
5. Select "Allow"
6. Select the account you want to authenticate and press enter

**Option B:** VSCode using GitHub PAT Instructions

2. Follow instructions from [GitHub MCP Server Repo](https://github.com/github/github-mcp-server?tab=readme-ov-file#remote-github-mcp-server)

Now that you have authenticated via OAuth or PAT, let's confirm the tools.

1. Go to GitHub Copilot Chat
2. Select "Agent" mode
3. Click on the tools icon
4. View all of the available toolsets

### Part Three: Creating issues in this template with MCP

1. Since you are already in agent mode in VSCode, type the following prompt in chat to create an issue with MCP server

```markdown
create an issue for this repo for a feature request to toggle between dark mode and light mode
```

2. Look over the response. Once confirmed, press "continue"
3. Go to the repository and view the issue creation!

## ✅ Completion Checklist

Mark off each item as you complete it:

- [ ] Explored premium request monitoring and identified usage patterns
- [ ] Practiced model switching techniques
- [ ] Used project-specific prompt file
- [ ] Experimented with different custom agent modes
- [ ] Understood MCP servers or set up custom instruction patterns
- [ ] Applied customizations to improve your development workflow

## 🚀 What's Next?

Excellent work! You've now mastered the advanced customization features of GitHub Copilot.

---

👉 **[Start Copilot Spaces Demo](./copilot-spaces.md)**
