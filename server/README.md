# Ask Sonam AI — Backend

Node.js + Express API for the SonamOS portfolio assistant. The backend calls the Gemini Developer API directly so the API key never reaches the browser.

## Requirements

- Node.js 20+
- A Google AI Studio API key: https://aistudio.google.com/app/apikey

## Setup

From the repository root:

```bash
cd server
npm install
cp .env.example .env
```

Add your API key to `server/.env`:

```env
GEMINI_API_KEY=your_key_here
GEMINI_MODEL=gemini-3.1-flash-lite
CLIENT_ORIGIN=http://localhost:5173
PORT=5000
```

Never commit `.env` or expose the key in frontend code.

## Run locally

```bash
npm run dev
```

Health check: http://localhost:5000/api/health

## Chat endpoint

`POST /api/chat`

Request:

```json
{
  "messages": [
    { "role": "user", "content": "Tell me about Sonam's projects." },
    { "role": "model", "content": "Sonam has worked on..." },
    { "role": "user", "content": "Tell me more about HireLens." }
  ]
}
```

Response:

```json
{
  "reply": "HireLens is..."
}
```

Conversation roles are `user` and `model`. Send at most 12 messages, with the latest message from the visitor.

## Configuration and free-tier behavior

- `GEMINI_MODEL` defaults to `gemini-3.1-flash-lite`.
- The server does not automatically switch models or fall back to a paid provider.
- Gemini quota errors (HTTP 429) are returned as a friendly rate-limit message.
- Google AI Studio free-tier availability and limits depend on the selected model and can change. Check current terms and limits before deployment.
- Google states that content submitted on its free tier may be used to improve its products. Only public portfolio facts should be sent; do not include private personal information.

## Portfolio knowledge

Edit `src/data/portfolio.js` to update the public facts used by the assistant. Do not add private or sensitive information. The assistant is instructed to avoid inventing missing details.
