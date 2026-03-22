require("dotenv").config();
const express = require("express");
const cors    = require("cors");

const statsRoutes = require("./routes/statsRoutes");

const app  = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ──
app.use(cors({
  origin: [
    "http://localhost:5173",   // Vite dev server
    "http://localhost:3000",
    process.env.FRONTEND_URL,  // Production URL
  ].filter(Boolean),
  methods: ["GET", "POST"],
}));
app.use(express.json());

// ── Routes ──
app.use("/api/stats", statsRoutes);

app.get("/health", (req, res) => res.json({ status: "ok", time: new Date() }));

// ── Start ──
app.listen(PORT, () => {
  console.log(`\n🚀 Portfolio API running on http://localhost:${PORT}`);
  console.log(`   GET  /api/stats  → live coding stats`);
  console.log(`   POST /api/stats/clear → flush cache\n`);
});
