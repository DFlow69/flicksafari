# StreamVista

StreamVista is a streaming platform demo built with React, TypeScript, and Tailwind CSS.

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- React Router

## How to Run Locally

To run this project locally:

```sh
# Clone the repository
git clone <YOUR_REPO_URL>

# Navigate to the project directory
cd streamvista

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Deploying to GitHub Pages

To deploy this application to GitHub Pages:

### 1. Install the GitHub Pages dependency

```sh
npm install gh-pages --save-dev
```

### 2. Add deployment scripts to package.json

Add these scripts to your package.json:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 3. Configure Vite for GitHub Pages

In your vite.config.ts file, add your repository name as the base path:

```ts
export default defineConfig({
  base: '/your-repository-name/',
  // ... other config options
})
```

### 4. Deploy the application

Run the deploy command:

```sh
npm run deploy
```

### 5. Configure GitHub Repository Settings

1. Go to your GitHub repository
2. Navigate to Settings > Pages
3. Under "Source", select "gh-pages" branch
4. Save the changes

Your site will be published at `https://yourusername.github.io/your-repository-name/`

## Development Notes

- The search functionality uses a mock database in `src/data/data.js`
- Dark/light theme toggle is available in the header
- Responsive design works on mobile and desktop devices

## How can I edit this code?

There are several ways of editing your application.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
