const axios = require("axios");

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "gurleen-kaur5";

function githubHeaders() {
  const headers = { "User-Agent": "portfolio-stats-fetcher" };
  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
}

async function getGitHub() {
  try {
    const [userRes, reposRes] = await Promise.all([
      axios.get(`https://api.github.com/users/${GITHUB_USERNAME}`, {
        headers: githubHeaders(),
        timeout: 8000,
      }),
      axios.get(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
        { headers: githubHeaders(), timeout: 8000 }
      ),
    ]);

    const user  = userRes.data;
    const repos = reposRes.data;

    // Total stars across all public repos
    const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);

    // Top languages (by repo count)
    const langCount = {};
    repos.forEach(r => {
      if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1;
    });
    const topLanguages = Object.entries(langCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4)
      .map(([lang]) => lang);

    // Recent repos (non-fork, non-empty)
    const recentRepos = repos
      .filter(r => !r.fork && r.description)
      .slice(0, 3)
      .map(r => ({
        name: r.name,
        description: r.description,
        stars: r.stargazers_count,
        language: r.language,
        url: r.html_url,
      }));

    return {
      username: GITHUB_USERNAME,
      name: user.name || GITHUB_USERNAME,
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      totalStars,
      topLanguages,
      recentRepos,
      profileUrl: user.html_url,
      avatarUrl: user.avatar_url,
    };
  } catch (err) {
    console.error("[GitHub] Fetch failed:", err.message);
    return {
      username: GITHUB_USERNAME,
      publicRepos: 5,
      followers: 0,
      totalStars: 0,
      topLanguages: ["JavaScript", "Python", "Java"],
      recentRepos: [],
      profileUrl: `https://github.com/${GITHUB_USERNAME}`,
      isFallback: true,
    };
  }
}

module.exports = { getGitHub };
