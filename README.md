# StitchVault

Curated library of Google Stitch prompts and design templates for vibe coders.

## Description
AI-powered prompt library helping designers go from prompt to production-ready UI using Google Stitch.

## Quick Start
```bash
npm install
npm run start:dev
```

## Environment
```bash
MONGODB_URI=mongodb://localhost:27017/stitchvault
PORT=3000
```

## GraphQL Endpoint
http://localhost:3000/graphql

## Schema
- `prompts` - List all prompts (sorted by usage count)
- `prompt(id)` - Get single prompt
- `promptsByCategory(category)` - Filter by category
- `searchPrompts(query)` - Full-text search
- `createPrompt(input)` - Add new prompt
- `incrementPromptUsage(id)` - Track usage

## Tech Stack
- NestJS + GraphQL + MongoDB
- TypeScript