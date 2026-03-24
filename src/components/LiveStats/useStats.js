import { useEffect, useState } from "react";

// ✅ usernames
const GITHUB_USERNAME = "ParmandeepKaur";
const LEETCODE_USERNAME = "7VbyC6i50H";

// ✅ manual data (EDIT THESE)
const CODECHEF_DATA = {
  username: "ideal_sail_60",
  rating: 1500,          // 🔁 your rating
  problemsSolved: 120,   // 🔁 your solved count
};

const HACKERRANK_DATA = {
  username: "mandhirkaur733",
  problemsSolved: 100,   // 🔁 your solved count
  badges: 5,             // 🔁 number of badges
};

const GFG_DATA = {
  username: "mandhirkp7la",
  score: 494,     // 🔁 your score
  rank: 4991,     // 🔁 your rank
};

export function useStats() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        // ✅ GitHub
        const ghRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        const ghData = await ghRes.json();

        // ✅ LeetCode
        const lcRes = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${LEETCODE_USERNAME}`);
        const lcData = await lcRes.json();

        const formatted = {
          github: {
            publicRepos: ghData.public_repos || 0,
            followers: ghData.followers || 0,
            profileUrl: `https://github.com/${GITHUB_USERNAME}`,
          },
          leetcode: {
            totalSolved: lcData.totalSolved || 0,
            contestRating: lcData.ranking || 0,
            profileUrl: `https://leetcode.com/u/${LEETCODE_USERNAME}/`,
          },
          codechef: {
            username: CODECHEF_DATA.username,
            rating: CODECHEF_DATA.rating,
            problemsSolved: CODECHEF_DATA.problemsSolved,
            profileUrl: `https://www.codechef.com/users/${CODECHEF_DATA.username}`,
          },
          hackerrank: {
            username: HACKERRANK_DATA.username,
            problemsSolved: HACKERRANK_DATA.problemsSolved,
            badges: HACKERRANK_DATA.badges,
            profileUrl: `https://www.hackerrank.com/${HACKERRANK_DATA.username}`,
          },
          gfg: {
            username: GFG_DATA.username,
            score: GFG_DATA.score,
            rank: GFG_DATA.rank,
            profileUrl: `https://www.geeksforgeeks.org/user/${GFG_DATA.username}`,
          },
        };

        setData(formatted);
      } catch (error) {
        console.error("Error fetching stats:", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return { data, loading };
}