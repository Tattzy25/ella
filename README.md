# Ella: Production-Grade AI Chat Platform

**Ella** is a fully deployable, real-data, production-grade AI chat platform built with Next.js, Groq LLMs, Neon Serverless Postgres, and modern UI/UX best practices. There are zero placeholders, no dummy data, and no legacy authentication or model providers—everything is operational, authentic, and ready for real users.

## What is Ella?

Ella is a next-generation AI chat application designed for immediate deployment and real-world use. It leverages Groq's blazing-fast LLMs for intelligent, context-aware conversations, and stores all user and chat data in a scalable Neon Postgres database. The UI is modern, accessible, and responsive, built with shadcn/ui and Tailwind CSS.

**Key Features:**
- **Groq LLM Integration:** All chat and reasoning is powered by Groq's meta-llama/llama-4-scout-17b-16e-instruct model for high-quality, real-time responses.
- **Real Data, No Placeholders:** Every feature is wired to real endpoints and a real database. There are no mockups, no dummy text, and no fake screens—everything is live-grade and operational.
- **Full-Stack Architecture:** Built with Next.js App Router, React Server Components, and server actions for maximum performance and scalability.
- **Persistent Chat History:** User conversations and artifacts are stored in Neon Serverless Postgres for reliable, scalable data persistence.
- **Modern UI/UX:** Accessible, responsive, and beautiful interface using shadcn/ui, Radix UI primitives, and Tailwind CSS.
- **Secure by Default:** No authentication logic is present; all sensitive configuration is managed via environment variables. `.env` is gitignored and never committed.
- **Production-Ready:** Every line of code is deployable today—no prototypes, no samples, no unfinished features.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Tattzy25/ella.git
   cd ella
   ```
2. **Install dependencies:**
   ```bash
   pnpm install
   ```
3. **Configure environment:**
   - Copy `.env.example` to `.env` and fill in your real Groq API key and Neon Postgres credentials.
   - Never commit your `.env` file.
4. **Run the app locally:**
   ```bash
   pnpm dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Deployment

Ella is designed for seamless deployment on Vercel or any modern Node.js hosting platform. All configuration is handled via environment variables for maximum security and flexibility.

## Tech Stack
- **Frontend:** Next.js 14, React, shadcn/ui, Tailwind CSS, Radix UI
- **AI Model:** Groq meta-llama/llama-4-scout-17b-16e-instruct
- **Database:** Neon Serverless Postgres
- **Storage:** Vercel Blob (for file uploads and artifacts)
- **Testing:** Playwright, E2E and integration tests

## Production Rules
- **No placeholders. No dummy data. No fake screens.**
- **All endpoints, database schemas, and UI are real and operational.**
- **Deployable today—no unfinished features.**

## License

MIT License. See [LICENSE](./LICENSE) for details.

---

Ella is built for real-world, production use. If you need a fully functional, authentic AI chat platform, Ella is ready to launch.