import { motion } from "framer-motion";
import { ExternalLink, Github, Zap } from "lucide-react";
import { useStats } from "./useStats";
import "./LiveStats.css";

export default function LiveStats() {
  const { data, loading } = useStats();

  const lc = data?.leetcode;
  const gh = data?.github;
  const cc = data?.codechef;
  const hr = data?.hackerrank;

  return (
    <section className="section live-stats-section">
      <div className="container">

        <div className="section-header">
          <div className="section-eyebrow">
            <Zap size={12} /> Coding Profiles
          </div>
          <h2 className="section-title">My Coding Activity</h2>
        </div>

        <div className="ls-grid">

          {/* ── LeetCode ── */}
          <motion.a href={lc?.profileUrl} target="_blank" rel="noreferrer" className="ls-card card lc-card">
            <div className="ls-card-header">
              <div className="ls-platform-badge lc-badge">LeetCode</div>
              <ExternalLink size={14} />
            </div>

            {loading ? <p>Loading...</p> : (
              <>
                <div className="ls-big-num lc-color">
                  {lc?.totalSolved || 0}
                  <span className="ls-big-label"> problems solved</span>
                </div>

                <div className="ls-stat">
                  <div className="ls-stat-val lc-color">{lc?.contestRating || 0}</div>
                  <div className="ls-stat-key">Ranking</div>
                </div>
              </>
            )}
          </motion.a>

          {/* ── GitHub ── */}
          <motion.a href={gh?.profileUrl} target="_blank" rel="noreferrer" className="ls-card card gh-card">
            <div className="ls-card-header">
              <div className="ls-platform-badge gh-badge">
                <Github size={12} /> GitHub
              </div>
              <ExternalLink size={14} />
            </div>

            {loading ? <p>Loading...</p> : (
              <>
                <div className="ls-big-num gh-color">
                  {gh?.publicRepos || 0}
                  <span className="ls-big-label"> repos</span>
                </div>

                <div className="ls-stat">
                  <div className="ls-stat-val gh-color">{gh?.followers || 0}</div>
                  <div className="ls-stat-key">Followers</div>
                </div>
              </>
            )}
          </motion.a>

          {/* ── CodeChef ── */}
          <motion.a href={cc?.profileUrl} target="_blank" rel="noreferrer" className="ls-card card cc-card">
            <div className="ls-card-header">
              <div className="ls-platform-badge cc-badge">CodeChef</div>
              <ExternalLink size={14} />
            </div>

            <div className="ls-big-num cc-color">
              {cc?.rating}
              <span className="ls-big-label"> rating</span>
            </div>

            <div className="ls-stat">
              <div className="ls-stat-val cc-color">{cc?.problemsSolved}</div>
              <div className="ls-stat-key">Problems Solved</div>
            </div>
          </motion.a>

          {/* ── HackerRank ── */}
          <motion.a href={hr?.profileUrl} target="_blank" rel="noreferrer" className="ls-card card hr-card">
            <div className="ls-card-header">
              <div className="ls-platform-badge hr-badge">HackerRank</div>
              <ExternalLink size={14} />
            </div>

            <div className="ls-big-num hr-color">
              {hr?.problemsSolved}
              <span className="ls-big-label"> problems solved</span>
            </div>

            <div className="ls-stat">
              <div className="ls-stat-val hr-color">{hr?.badges}</div>
              <div className="ls-stat-key">Badges</div>
            </div>
          </motion.a>
          <motion.a
  href={data?.gfg?.profileUrl}
  target="_blank"
  rel="noreferrer"
  className="ls-card card gfg-card"
>
  <div className="ls-card-header">
    <div className="ls-platform-badge gfg-badge">GeeksforGeeks</div>
    <ExternalLink size={14} />
  </div>

  <div className="ls-big-num gfg-color">
    {data?.gfg?.score}
    <span className="ls-big-label"> score</span>
  </div>

  <div className="ls-stat">
    <div className="ls-stat-val gfg-color">
      {data?.gfg?.rank}
    </div>
    <div className="ls-stat-key">Rank</div>
  </div>
</motion.a>
        </div>
      </div>
    </section>
  );
}