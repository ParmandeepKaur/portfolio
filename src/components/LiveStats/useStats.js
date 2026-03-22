import { useEffect, useState } from "react";

// In dev: calls http://localhost:5000/api/stats (run `vercel dev`)
// In prod: calls /api/stats on same Vercel domain — no CORS, no backend needed
const API_URL = import.meta.env.DEV
  ? (import.meta.env.VITE_API_URL ?? "http://localhost:3000")
  : "";

const CACHE_KEY = "portfolio_stats_v2";
const CACHE_TTL = 6 * 60 * 60 * 1000; // 6 hours (matches CDN cache)

const FALLBACK = {
  leetcode: {
    totalSolved: 788, easy: 220, medium: 490, hard: 78,
    streak: 271, totalActiveDays: 339,
    contestRating: 1806, topPercentage: 8.0,
    profileUrl: "https://leetcode.com/u/gurleen-kaur5/",
  },
  github: {
    publicRepos: 5, followers: 0, totalStars: 0,
    topLanguages: ["JavaScript", "Python", "Java"],
    profileUrl: "https://github.com/gurleen-kaur5",
  },
  lastUpdated: null,
  isFallback: true,
};

export function useStats() {
  const [data,    setData]    = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      // 1. Serve from sessionStorage cache if fresh
      try {
        const raw = sessionStorage.getItem(CACHE_KEY);
        if (raw) {
          const cached = JSON.parse(raw);
          const age = Date.now() - new Date(cached.lastUpdated).getTime();
          if (age < CACHE_TTL) {
            if (!cancelled) { setData(cached); setLoading(false); }
            return;
          }
        }
      } catch { /* bad cache, ignore */ }

      // 2. Fetch from /api/stats (Vercel serverless function)
      try {
        const res = await fetch(`${API_URL}/api/stats`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();

        try { sessionStorage.setItem(CACHE_KEY, JSON.stringify(json)); } catch { /* quota */ }
        if (!cancelled) { setData(json); setLoading(false); }
      } catch {
        // 3. Silently use fallback — UI never breaks
        if (!cancelled) { setData(FALLBACK); setLoading(false); }
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);

  return { data, loading };
}