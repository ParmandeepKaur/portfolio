const axios = require("axios");

const LEETCODE_USERNAME = process.env.LEETCODE_USERNAME || "gurleen-kaur5";

const GRAPHQL_QUERY = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      submitStats: submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
      profile {
        ranking
        reputation
        starRating
      }
      userCalendar {
        streak
        totalActiveDays
      }
    }
    userContestRanking(username: $username) {
      rating
      globalRanking
      topPercentage
      attendedContestsCount
    }
  }
`;

async function getLeetCode() {
  try {
    const { data } = await axios.post(
      "https://leetcode.com/graphql",
      {
        query: GRAPHQL_QUERY,
        variables: { username: LEETCODE_USERNAME },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Referer": "https://leetcode.com",
        },
        timeout: 8000,
      }
    );

    const user = data?.data?.matchedUser;
    const contest = data?.data?.userContestRanking;

    if (!user) throw new Error("LeetCode user not found");

    const acStats = user.submitStats?.acSubmissionNum || [];
    const total  = acStats.find(s => s.difficulty === "All")?.count   || 0;
    const easy   = acStats.find(s => s.difficulty === "Easy")?.count  || 0;
    const medium = acStats.find(s => s.difficulty === "Medium")?.count || 0;
    const hard   = acStats.find(s => s.difficulty === "Hard")?.count  || 0;

    return {
      username: LEETCODE_USERNAME,
      totalSolved: total,
      easy,
      medium,
      hard,
      ranking: user.profile?.ranking || null,
      streak: user.userCalendar?.streak || 0,
      totalActiveDays: user.userCalendar?.totalActiveDays || 0,
      contestRating: contest?.rating ? Math.round(contest.rating) : 1806,
      topPercentage: contest?.topPercentage
        ? parseFloat(contest.topPercentage.toFixed(1))
        : 8.0,
      contestsAttended: contest?.attendedContestsCount || 0,
      profileUrl: `https://leetcode.com/u/${LEETCODE_USERNAME}/`,
    };
  } catch (err) {
    console.error("[LeetCode] Fetch failed:", err.message);
    // Fallback to known static values so the UI never breaks
    return {
      username: LEETCODE_USERNAME,
      totalSolved: 788,
      easy: 220,
      medium: 490,
      hard: 78,
      ranking: null,
      streak: 271,
      totalActiveDays: 339,
      contestRating: 1806,
      topPercentage: 8.0,
      contestsAttended: null,
      profileUrl: `https://leetcode.com/u/${LEETCODE_USERNAME}/`,
      isFallback: true,
    };
  }
}

module.exports = { getLeetCode };
