const NodeCache = require("node-cache");
const { getLeetCode } = require("../services/leetcodeService");
const { getGitHub }   = require("../services/githubService");

// Cache for 12 hours (TTL in seconds)
const cache = new NodeCache({ stdTTL: 12 * 60 * 60 });

const getStats = async (req, res) => {
  try {
    const cached = cache.get("stats");
    if (cached) {
      return res.json({ ...cached, fromCache: true });
    }

    // Fetch both in parallel
    const [leetcode, github] = await Promise.all([
      getLeetCode(),
      getGitHub(),
    ]);

    const payload = {
      leetcode,
      github,
      lastUpdated: new Date().toISOString(),
    };

    cache.set("stats", payload);
    return res.json({ ...payload, fromCache: false });
  } catch (err) {
    console.error("[StatsController] Error:", err.message);
    return res.status(500).json({ error: "Failed to fetch stats" });
  }
};

// Manual cache clear endpoint (useful during dev)
const clearCache = (req, res) => {
  cache.flushAll();
  res.json({ message: "Cache cleared" });
};

module.exports = { getStats, clearCache };
