// api/stats.js  — Vercel Edge/Serverless Function
// Deployed automatically when you push to Vercel.
// Accessible at: https://your-site.vercel.app/api/stats

const LEETCODE_USERNAME = "gurleen-kaur5";
const GITHUB_USERNAME   = "gurleen-kaur5";

const LEETCODE_QUERY = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      submitStats: submitStatsGlobal {
        acSubmissionNum { difficulty count }
      }
      userCalendar { streak totalActiveDays }
    }
    userContestRanking(username: $username) {
      rating topPercentage attendedContestsCount
    }
  }
`;

async function fetchLeetCode() {
  const res = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Referer": "https://leetcode.com",
      "User-Agent": "Mozilla/5.0",
    },
    body: JSON.stringify({
      query: LEETCODE_QUERY,
      variables: { username: LEETCODE_USERNAME },
    }),
  });

  if (!res.ok) throw new Error(`LeetCode ${res.status}`);
  const { data } = await res.json();

  const user    = data?.matchedUser;
  const contest = data?.userContestRanking;
  const ac      = user?.submitStats?.acSubmissionNum ?? [];

  return {
    totalSolved:     ac.find(s => s.difficulty === "All")?.count    ?? 788,
    easy:            ac.find(s => s.difficulty === "Easy")?.count   ?? 220,
    medium:          ac.find(s => s.difficulty === "Medium")?.count ?? 490,
    hard:            ac.find(s => s.difficulty === "Hard")?.count   ?? 78,
    streak:          user?.userCalendar?.streak          ?? 271,
    totalActiveDays: user?.userCalendar?.totalActiveDays ?? 339,
    contestRating:   contest?.rating ? Math.round(contest.rating)  : 1806,
    topPercentage:   contest?.topPercentage
                       ? parseFloat(contest.topPercentage.toFixed(1)) : 8.0,
    profileUrl: `https://leetcode.com/u/${LEETCODE_USERNAME}/`,
  };
}

async function fetchGitHub() {
  const headers = {
    "User-Agent": "portfolio-stats",
    "Accept": "application/vnd.github+json",
  };
  // Optional: set GITHUB_TOKEN in Vercel env vars for higher rate limits
  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const [userRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers }),
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, { headers }),
  ]);

  if (!userRes.ok)  throw new Error(`GitHub user ${userRes.status}`);
  if (!reposRes.ok) throw new Error(`GitHub repos ${reposRes.status}`);

  const user  = await userRes.json();
  const repos = await reposRes.json();

  const totalStars = repos.reduce((s, r) => s + (r.stargazers_count ?? 0), 0);
  const langCount  = {};
  repos.forEach(r => { if (r.language) langCount[r.language] = (langCount[r.language] ?? 0) + 1; });
  const topLanguages = Object.entries(langCount)
    .sort((a, b) => b[1] - a[1]).slice(0, 5).map(([l]) => l);

  return {
    publicRepos:  user.public_repos ?? 0,
    followers:    user.followers    ?? 0,
    totalStars,
    topLanguages,
    profileUrl:   user.html_url,
  };
}

const FALLBACK = {
  leetcode: {
    totalSolved: 788, easy: 220, medium: 490, hard: 78,
    streak: 271, totalActiveDays: 339,
    contestRating: 1806, topPercentage: 8.0,
    profileUrl: `https://leetcode.com/u/${LEETCODE_USERNAME}/`,
  },
  github: {
    publicRepos: 5, followers: 0, totalStars: 0,
    topLanguages: ["JavaScript", "Python", "Java"],
    profileUrl: `https://github.com/${GITHUB_USERNAME}`,
  },
};

export default async function handler(req, res) {
  // Allow CORS from your own domain and localhost
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  // Cache at CDN level for 6 hours
  res.setHeader("Cache-Control", "s-maxage=21600, stale-while-revalidate=86400");

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const [leetcode, github] = await Promise.allSettled([
      fetchLeetCode(),
      fetchGitHub(),
    ]);

    return res.status(200).json({
      leetcode:    leetcode.status  === "fulfilled" ? leetcode.value  : FALLBACK.leetcode,
      github:      github.status    === "fulfilled" ? github.value    : FALLBACK.github,
      lastUpdated: new Date().toISOString(),
      isFallback:  leetcode.status !== "fulfilled" && github.status !== "fulfilled",
    });
  } catch (err) {
    return res.status(200).json({
      ...FALLBACK,
      lastUpdated: new Date().toISOString(),
      isFallback: true,
    });
  }
}