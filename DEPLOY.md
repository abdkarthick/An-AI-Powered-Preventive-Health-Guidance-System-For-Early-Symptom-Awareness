# Deploying to Vercel

To deploy your Prevento AI app to Vercel, follow these steps:

## Prerequisites
- You need a Vercel account.
- The `vercel` CLI tool installed or available via `npx`.

## Steps

1.  **Login to Vercel**
    Running the deployment command will prompt you to login if you aren't already.

2.  **Run Deployment**
    I have added a shortcut script. Run:
    ```bash
    npm run deploy
    ```
    Or use `npx vercel` directly.

3.  **Configure Project**
    - The CLI will ask to set up and deploy (answer `Y`).
    - Select scope (usually your username, e.g., `prevento-ai-team`).
    - Link to existing project? `N` (for new project).
    - Project name? (Press Enter for default `prevento-ai`).
    - Directory? (Press Enter for `./`).
    - **Build command**: It should auto-detect `vite build`.
    - **Output directory**: It should auto-detect `dist`.
    - **Development command**: It should auto-detect `vite`.

4.  **Environment Variables (CRITICAL!)**
    - During setup or in the Vercel Dashboard later, you MUST set the environment variable:
        - `VITE_GEMINI_API_KEY`: Your Gemini API Key.
    - If you miss this during setup, go to Project Settings -> Environment Variables and add it, then redeploy.

5.  **Access**
    Once deployment finishes, it will give you a URL like `https://prevento-ai.vercel.app`.
