# Automated Weight Loss Testimonial Reel Generator

An AI-powered application that automatically transforms a long-form weight loss journey testimonial video into an engaging, 60-90 second social media reel.

## Features

- **Automated Video Processing**: Analyzes uploaded video testimonials using AI to detect key moments.
- **Narrative Extraction**: AI identifies the hook, the "before" problem state, the turning point, and the final results.
- **Client-Side Rendering**: Uses HTML5 canvas and Web Workers to assemble and render the final reel right in the browser.
- **Privacy-First**: Video clips are processed exclusively on your device.

## Prerequisites

- Node.js 18+
- Gemini API Key

## Setup

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file based on the provided `.env.example`:
   ```bash
   cp .env.example .env.local
   ```
   Add your primary Google Gemini API Key to `.env.local`:
   ```env
   GEMINI_API_KEY="your_api_key_here"
   ```

## Development

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Production Build

To build the app for production, run:

```bash
npm run build
```

This will generate an optimized build in the `dist` folder. To preview the build:

```bash
npm run preview
```

## Technologies Used

- **React 19**
- **Vite**
- **Tailwind CSS v4**
- **Google Gemini API** (via `@google/genai`)
- **Web Workers** for video extraction off the main thread.
