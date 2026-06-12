
# 🎙️ AI Interviewer

A voice-based AI technical interviewer that conducts live, voice-driven interviews tailored to a candidate's GitHub profile and provides instant feedback, scoring, and transcripts.
## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## 📦 What's inside?

This Turborepo includes the following applications and packages:

### Apps and Packages

- `apps/backend`: A fast [Bun](https://bun.sh/) backend service handling the interview session logic.
- `apps/frontend`: A React SPA built with Tailwind CSS, Shadcn UI, and Lucide icons. It features:
  - **GitHub Kickstart**: Enter a GitHub profile to generate a tailored interview.
  - **Voice Interface**: Real-time voice interaction with an interactive `VoiceOrb` visualizer.
  - **AI Feedback**: Comprehensive results page showing an AI-generated score (out of 10), detailed feedback, and a full conversation transcript.
- `@repo/ui`: A shared React component library containing core UI elements.
- `@repo/eslint-config`: Shared ESLint configurations.
- `@repo/typescript-config`: Shared `tsconfig.json` configurations used across the monorepo.

### Utilities

This monorepo is configured with:
- [Bun](https://bun.sh/) as the package manager and runtime
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Tailwind CSS](https://tailwindcss.com/) for styling

### Build

To build all apps and packages:

sh
bun turbo build


Or build a specific app (e.g., frontend):

sh
bun turbo build --filter=bun-react-template


### Develop

To start the development environment for all apps:

sh
bun turbo dev


To run a specific workspace:

sh
bun turbo dev --filter=bun-react-template

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.dev/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.dev/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.dev/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.dev/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.dev/docs/reference/configuration)
- [CLI Usage](https://turborepo.dev/docs/reference/command-line-reference)
