import type { Question } from "../types/quiz";

const questions: Question[] = [
  {
    id: 1,
    question: "What does `git clone` do?",
    options: [
      "Creates a new branch",
      "Downloads a repository from GitHub to your computer",
      "Uploads your code to GitHub",
      "Deletes a repository",
    ],
    correctAnswer: 1,
    category: "git",
    explanation:
      "git clone creates a local copy of a remote repository, including its commit history.",
  },

  {
    id: 2,
    question: "Which command checks the current status of your Git repository?",
    options: [
      "git check",
      "git status",
      "git log",
      "git branch",
    ],
    correctAnswer: 1,
    category: "git",
    explanation:
      "git status shows modified files, staged files, and the current branch.",
  },

  {
    id: 3,
    question: "What does `git add .` do?",
    options: [
      "Deletes all files",
      "Stages all changed files",
      "Commits changes",
      "Pushes changes to GitHub",
    ],
    correctAnswer: 1,
    category: "git",
    explanation:
      "git add . stages all modified and new files so they can be committed.",
  },

  {
    id: 4,
    question: "Which command creates a commit?",
    options: [
      "git push",
      "git commit -m \"message\"",
      "git save",
      "git stage",
    ],
    correctAnswer: 1,
    category: "git",
    explanation:
      "A commit saves a snapshot of your staged changes with a descriptive message.",
  },

  {
    id: 5,
    question: "What does `git push` do?",
    options: [
      "Downloads changes",
      "Uploads commits to GitHub",
      "Creates a branch",
      "Deletes commits",
    ],
    correctAnswer: 1,
    category: "git",
    explanation:
      "git push uploads your local commits to the remote repository.",
  },

  {
    id: 6,
    question: "What is the purpose of `git pull`?",
    options: [
      "Upload changes",
      "Delete a repository",
      "Download and merge changes from GitHub",
      "Create a commit",
    ],
    correctAnswer: 2,
    category: "git",
    explanation:
      "git pull fetches the latest changes from the remote repository and merges them.",
  },

  {
    id: 7,
    question: "What is a Git branch?",
    options: [
      "A backup file",
      "A separate line of development",
      "A GitHub account",
      "A repository",
    ],
    correctAnswer: 1,
    category: "git",
    explanation:
      "Branches let developers work on features independently without affecting the main branch.",
  },

  {
    id: 8,
    question: "Why do developers create Pull Requests?",
    options: [
      "To delete branches",
      "To review and merge code changes",
      "To install Node.js",
      "To run a project",
    ],
    correctAnswer: 1,
    category: "git",
    explanation:
      "A Pull Request allows teammates to review code before merging it.",
  },

  {
    id: 9,
    question: "What is React primarily used for?",
    options: [
      "Managing databases",
      "Building user interfaces",
      "Creating operating systems",
      "Writing SQL queries",
    ],
    correctAnswer: 1,
    category: "react",
    explanation:
      "React is a JavaScript library used to build interactive user interfaces.",
  },

  {
    id: 10,
    question: "What does the `useState` hook do in React?",
    options: [
      "Deletes components",
      "Stores and updates component state",
      "Connects to GitHub",
      "Runs CSS",
    ],
    correctAnswer: 1,
    category: "react",
    explanation:
      "useState allows React components to store and update data.",
  },

  {
    id: 11,
    question: "Why is TypeScript used instead of plain JavaScript?",
    options: [
      "It replaces HTML",
      "It adds static typing and catches errors early",
      "It removes CSS",
      "It creates databases",
    ],
    correctAnswer: 1,
    category: "typescript",
    explanation:
      "TypeScript helps catch type-related errors before the application runs.",
  },

  {
    id: 12,
    question: "Which file extension is commonly used for React components written in TypeScript?",
    options: [
      ".js",
      ".tsx",
      ".java",
      ".jsxx",
    ],
    correctAnswer: 1,
    category: "typescript",
    explanation:
      ".tsx files allow you to write TypeScript together with JSX.",
  },

  {
    id: 13,
    question: "What is Node.js?",
    options: [
      "A database",
      "A JavaScript runtime",
      "A CSS framework",
      "A browser",
    ],
    correctAnswer: 1,
    category: "tooling",
    explanation:
      "Node.js allows JavaScript to run outside the browser.",
  },

  {
    id: 14,
    question: "What does npm stand for?",
    options: [
      "Node Package Manager",
      "New Project Manager",
      "Node Programming Mode",
      "Network Package Module",
    ],
    correctAnswer: 0,
    category: "tooling",
    explanation:
      "npm is the default package manager for Node.js projects.",
  },

  {
    id: 15,
    question: "Which command installs project dependencies?",
    options: [
      "npm build",
      "npm install",
      "npm create",
      "npm serve",
    ],
    correctAnswer: 1,
    category: "tooling",
    explanation:
      "npm install downloads all dependencies listed in package.json.",
  },

  {
    id: 16,
    question: "Which command starts a Vite development server?",
    options: [
      "npm run dev",
      "npm run start",
      "npm begin",
      "npm launch",
    ],
    correctAnswer: 0,
    category: "tooling",
    explanation:
      "npm run dev starts the local development server in a Vite project.",
  },

  {
    id: 17,
    question: "Which platform is commonly used to deploy React projects in ACA?",
    options: [
      "MySQL",
      "Vercel",
      "Oracle",
      "Tomcat",
    ],
    correctAnswer: 1,
    category: "deployment",
    explanation:
      "Vercel is commonly used to deploy React and Vite applications.",
  },

  {
    id: 18,
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyper Tool Markup Language",
      "Home Text Markup Language",
    ],
    correctAnswer: 0,
    category: "html-css",
    explanation:
      "HTML is the standard markup language used to structure web pages.",
  },

  {
    id: 19,
    question: "Which CSS property changes the text color?",
    options: [
      "font-color",
      "color",
      "text-style",
      "background",
    ],
    correctAnswer: 1,
    category: "html-css",
    explanation:
      "The color property changes the color of text.",
  },

  {
    id: 20,
    question: "What is the purpose of CSS?",
    options: [
      "Store data",
      "Style and layout web pages",
      "Manage databases",
      "Compile TypeScript",
    ],
    correctAnswer: 1,
    category: "html-css",
    explanation:
      "CSS controls the appearance, layout, spacing, colors, and responsiveness of web pages.",
  },
];

export default questions;
