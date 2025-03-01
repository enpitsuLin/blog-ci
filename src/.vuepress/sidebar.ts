import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/english": [
    "let-chatgpt-be-your-foreign-language-teacher",
    "how-to-self-evaluate-english-level",
    "learning-7000-words-task-completed",
    "everyone-can-learn-english-1-overview",
    "everyone-can-learn-english-2-pronunciation",
    "everyone-can-learn-english-3-words",
    "everyone-can-learn-english-4-listening-and-speaking",
    "everyone-can-learn-english-5-reading-and-writing",
    "contemporary-college-english-1",
    "contemporary-college-english-2",
    "contemporary-college-english-3",
    "contemporary-college-english-4",
    "contemporary-college-english-5",
    "contemporary-college-english-6",
  ],
  "/": [
    {
      text: "实用工具",
      prefix: "/tools/",
      children: [
        "how-to-connect-to-internet"
      ]
    },
    {
      text: "Git相关",
      prefix: "/git/",
      children: [
        "git-definitive-guide-to-merge-code",
        "gitlab-ci",
        "git-useful-commands",
        "rethinking-git-flow",
        "git-best-pratices",
        "use-command-line-tool-to-manage-gitlab-merge-request",
      ]
    },
    {
      text: "软件测试",
      prefix: "/software-testing/",
      children: [
        "use-RestAssured-for-api-testing",
        "use-jest-for-test-driven-development",
        "use-playwright-for-ui-testing",
        "use-cypress-for-e2e-testing",
      ]
    },
    {
      text: "Python",
      prefix: "/python",
      children: ["export-mysql-table-into-excel"]
    },
    {
      text: "前端技术",
      prefix: "/frontend",
      children: ["old-articles"]
    }
  ],
  "/daily/": "structure",
});
