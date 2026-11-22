import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import chatRouter from "./routes/chat.js";

const app = express();
const port = Number(process.env.PORT) || 5000;

const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.disable("x-powered-by");
app.use(helmet());
app.use(cors({
  origin(origin, callback) {
    // Allow non-browser tools such as curl/health checks, while restricting browser origins.
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error("Origin not allowed by CORS"));
  }
}));
app.use(express.json({ limit: "20kb" }));

const chatLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 10,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: {
    error: "Too many messages too quickly. Please wait a minute and try again."
  }
});

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "Ask Sonam AI API",
    configured: Boolean(process.env.GEMINI_API_KEY)
  });
});

app.use("/api/chat", chatLimiter, chatRouter);

app.use((error, _req, res, _next) => {
  if (error.message === "Origin not allowed by CORS") {
    return res.status(403).json({ error: "This website is not allowed to access the API." });
  }
  if (error instanceof SyntaxError && "body" in error) {
    return res.status(400).json({ error: "Request body must be valid JSON." });
  }
  console.error("Unhandled API error:", error.message);
  return res.status(500).json({ error: "An unexpected server error occurred." });
});

app.listen(port, () => {
  console.log(`Ask Sonam AI API listening on http://localhost:${port}`);
});
