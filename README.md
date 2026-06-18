
# 🎙️ AI Interviewer

A voice-based AI technical interviewer that conducts live, voice-driven interviews tailored to a candidate's GitHub profile. Features include real-time voice interaction, AI-generated feedback (1-10 scale), and full conversation transcripts.

---
## 📦 Project Structure

This monorepo uses [Turborepo](https://turborepo.dev/) with the following components:

### Apps

- **`apps/backend`**: High‑performance [Bun](https://bun.sh/) service handling interview session logic, including sideband WebSocket communication and result processing.
- **`apps/backend/result.ts`**: Module that calculates interview scores, feedback, and transcript aggregation.
- **`apps/backend/sideband.ts`**: Module that manages the side‑channel WebSocket used for real‑time session updates.
- **`apps/frontend`**: React SPA with:
  - GitHub profile‑based interview generation
  - Real‑time voice interface with `VoiceOrb` visualizer
  - Results page with AI score, feedback, and transcript

### Shared Packages

- `@repo/ui`: Core UI components (Tailwind CSS + Shadcn UI + Lucide icons)
- `@repo/eslint-config`: Project‑wide ESLint configuration
- `@repo/typescript-config`: Shared TypeScript configuration

---
## 🛠️ Tech Stack

- **Runtime**: [Bun](https://bun.sh/)
- **Type Checking**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Linting**: [ESLint](https://eslint.org/)

---
## 🚀 Getting Started

bash
# Install dependencies for the whole monorepo
bun install

# Run the backend (Bun)
cd apps/backend && bun dev

# In a new terminal, run the frontend (also Bun)
cd ../../apps/frontend && bun dev


The backend will be available at `http://localhost:3000` and the frontend at `http://localhost:5173`. Make sure to set the `OPENAI_KEY` environment variable before starting the backend.
# Install dependencies for the whole monorepo
bun install

# Run the backend (Bun)
cd apps/backend && bun dev

# In a new terminal, run the frontend (also Bun)
cd ../../apps/frontend && bun dev


The backend will be available at `http://localhost:3000` and the frontend at `http://localhost:5173`. Make sure to set the `OPENAI_KEY` environment variable before starting the backend.

---
# Build all apps
bun turbo build

# Build specific app
bun turbo build --filter=frontend

# Start development
bun turbo dev

# Start specific workspace
bun turbo dev --filter=backend
```

---

# Build all apps
bun turbo build

# Build specific app
bun turbo build --filter=frontend

# Start development
bun turbo dev

# Start specific workspace
bun turbo dev --filter=backend
```

---

# Build all apps
bun turbo build

# Build specific app
bun turbo build --filter=frontend

# Start development
bun turbo dev

# Start specific workspace
bun turbo dev --filter=backend
```

---

## 📚 Key Features

- **GitHub Kickstart**: Auto-generates interview questions based on candidate's GitHub profile
- **Voice Interface**: Real-time voice interaction with visual feedback
- **AI Analysis**: Instant scoring (1-10 scale), detailed feedback, and full transcript
- **Monorepo Architecture**: Shared components and configurations across apps

---
## 📚 Resources

- [Turborepo Docs](https://turborepo.dev/docs)
  - [Task Execution](https://turborepo.dev/docs/crafting-your-repository/running-tasks)
  - [Caching Strategies](https://turborepo.dev/docs/crafting-your-repository/caching)
  - [Remote Caching](https://turborepo.dev/docs/core-concepts/remote-caching)
- [Bun Documentation](https://bun.sh/docs)