import { motion } from "framer-motion";
import { ExternalLink, Github, RefreshCw, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "./LiveStats.css";
import { useStats } from "./useStats";

/* ── Animated counter ── */
function CountUp({ end, duration = 1200, suffix = "" }) {
  const [val, setVal] = useState(0);
  const raf = useRef(null);

  useEffect(() => {
    if (!end && end !== 0) return;
    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(eased * end));
      if (progress < 1) raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current);
  }, [end, duration]);

  return <>{val.toLocaleString()}{suffix}</>;
}

/* ── Difficulty bar ── */
function DiffBar({ easy, medium, hard, total }) {
  if (!total) return null;
  const ep = (easy   / total) * 100;
  const mp = (medium / total) * 100;
  const hp = (hard   / total) * 100;
  return (
    <div className="diff-bar-wrap">
      <div className="diff-bar">
        <div className="diff-seg diff-easy"   style={{ width: `${ep}%` }} title={`Easy: ${easy}`}   />
        <div className="diff-seg diff-medium" style={{ width: `${mp}%` }} title={`Medium: ${medium}`}/>
        <div className="diff-seg diff-hard"   style={{ width: `${hp}%` }} title={`Hard: ${hard}`}   />
      </div>
      <div className="diff-legend">
        <span><span className="dot dot-easy"   />{easy}   Easy</span>
        <span><span className="dot dot-medium" />{medium} Medium</span>
        <span><span className="dot dot-hard"   />{hard}   Hard</span>
      </div>
    </div>
  );
}

/* ── Skeleton loader ── */
function Skeleton({ w = "100%", h = "1rem", r = "6px" }) {
  return (
    <div className="skeleton" style={{ width: w, height: h, borderRadius: r }} />
  );
}

export default function LiveStats() {
  const { data, loading } = useStats();
  const lc = data?.leetcode;
  const gh = data?.github;

  const lastUpdated = data?.lastUpdated
    ? new Date(data.lastUpdated).toLocaleString("en-IN", {
        day: "numeric", month: "short", hour: "2-digit", minute: "2-digit",
      })
    : null;

  return (
    <section className="section live-stats-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Zap size={12} /> Live Data
          </div>
          <h2 className="section-title">Coding Activity</h2>
          <p className="section-sub">
            Real-time stats pulled from LeetCode & GitHub — auto-refreshed every 12 hours.
          </p>
        </div>

        {data?.isFallback && (
          <div className="stats-notice">
            <RefreshCw size={12} /> Showing cached stats — live data updates every 12h.
          </div>
        )}

        <div className="ls-grid">

          {/* ── LeetCode Card ── */}
          <motion.a
            href="https://leetcode.com/u/gurleen-kaur5/"
            target="_blank"
            rel="noreferrer"
            className="ls-card card lc-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="ls-card-header">
              <div className="ls-platform-badge lc-badge">LeetCode</div>
              <ExternalLink size={14} className="ls-ext-icon" />
            </div>

            {loading ? (
              <>
                <Skeleton w="60%" h="3rem" r="8px" />
                <Skeleton w="40%" h="0.75rem" />
                <Skeleton h="8px" r="4px" />
              </>
            ) : (
              <>
                <div className="ls-big-num lc-color">
                  <CountUp end={lc?.totalSolved ?? 788} />
                  <span className="ls-big-label">problems solved</span>
                </div>

                <div className="ls-stats-row">
                  <div className="ls-stat">
                    <div className="ls-stat-val lc-color">
                      <CountUp end={lc?.contestRating ?? 1806} />
                    </div>
                    <div className="ls-stat-key">Contest Rating</div>
                  </div>
                  <div className="ls-stat">
                    <div className="ls-stat-val lc-color">
                      Top {lc?.topPercentage ?? 8}%
                    </div>
                    <div className="ls-stat-key">Global Rank</div>
                  </div>
                  <div className="ls-stat">
                    <div className="ls-stat-val lc-color">
                      <CountUp end={lc?.streak ?? 271} />d
                    </div>
                    <div className="ls-stat-key">Max Streak</div>
                  </div>
                </div>

                <DiffBar
                  easy={lc?.easy   ?? 220}
                  medium={lc?.medium ?? 490}
                  hard={lc?.hard   ?? 78}
                  total={lc?.totalSolved ?? 788}
                />
              </>
            )}
          </motion.a>

          {/* ── GitHub Card ── */}
          <motion.a
            href="https://github.com/gurleen-kaur5"
            target="_blank"
            rel="noreferrer"
            className="ls-card card gh-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="ls-card-header">
              <div className="ls-platform-badge gh-badge">
                <Github size={12} /> GitHub
              </div>
              <ExternalLink size={14} className="ls-ext-icon" />
            </div>

            {loading ? (
              <>
                <Skeleton w="50%" h="3rem" r="8px" />
                <Skeleton w="30%" h="0.75rem" />
                <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
                  <Skeleton w="60px" h="24px" r="999px" />
                  <Skeleton w="60px" h="24px" r="999px" />
                  <Skeleton w="60px" h="24px" r="999px" />
                </div>
              </>
            ) : (
              <>
                <div className="ls-big-num gh-color">
                  <CountUp end={gh?.publicRepos ?? 5} />
                  <span className="ls-big-label">public repos</span>
                </div>

                <div className="ls-stats-row">
                  <div className="ls-stat">
                    <div className="ls-stat-val gh-color">
                      <CountUp end={gh?.totalStars ?? 0} />
                    </div>
                    <div className="ls-stat-key">Total Stars</div>
                  </div>
                  <div className="ls-stat">
                    <div className="ls-stat-val gh-color">
                      <CountUp end={gh?.followers ?? 0} />
                    </div>
                    <div className="ls-stat-key">Followers</div>
                  </div>
                </div>

                {gh?.topLanguages?.length > 0 && (
                  <div className="gh-langs">
                    {gh.topLanguages.map(lang => (
                      <span key={lang} className="gh-lang-tag">{lang}</span>
                    ))}
                  </div>
                )}
              </>
            )}
          </motion.a>

          {/* ── CodeChef Card ── */}
          <motion.a
            href="https://www.codechef.com/users/gurleen_kaur5"
            target="_blank"
            rel="noreferrer"
            className="ls-card card cc-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="ls-card-header">
              <div className="ls-platform-badge cc-badge">CodeChef</div>
              <ExternalLink size={14} className="ls-ext-icon" />
            </div>

            <div className="ls-big-num cc-color">
              1495
              <span className="ls-big-label">peak rating</span>
            </div>

            <div className="ls-stats-row">
              <div className="ls-stat">
                <div className="ls-stat-val cc-color">1267</div>
                <div className="ls-stat-key">Global Rank</div>
              </div>
              <div className="ls-stat">
                <div className="ls-stat-val cc-color">3</div>
                <div className="ls-stat-key">Contests</div>
              </div>
            </div>

            <div className="cc-contests-note">
              Starters 228 · Div 4
            </div>
          </motion.a>

        </div>

        {lastUpdated && (
          <p className="ls-updated">
            <RefreshCw size={11} /> Last updated: {lastUpdated}
            {data?.fromCache && " · cached"}
          </p>
        )}
      </div>
    </section>
  );
}