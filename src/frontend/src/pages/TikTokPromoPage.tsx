import { Button } from "@/components/ui/button";
import { Pause, Play, RotateCcw } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const SCENE_DURATION = 3500;

const scenes = [
  {
    id: 1,
    emoji: "👋",
    headline: "Meet SmartQR",
    subtext: "Your digital contact, always ready",
    style: "slide" as const,
    bgClass: "from-slate-950 to-slate-900",
  },
  {
    id: 2,
    emoji: "⚡",
    headline: "Share your contact in seconds",
    subtext: "One scan. Instant connection.",
    style: "glow" as const,
    bgClass: "from-slate-950 to-indigo-950",
  },
  {
    id: 3,
    emoji: "📱",
    headline: "No app needed. Just scan.",
    subtext: "Works with every smartphone camera",
    style: "wordreveal" as const,
    bgClass: "from-slate-950 to-teal-950",
  },
  {
    id: 4,
    emoji: "🎉",
    headline: "It's 100% FREE",
    subtext: "No subscriptions. No hidden fees. Forever free.",
    style: "burst" as const,
    bgClass: "from-slate-950 to-yellow-950",
  },
  {
    id: 5,
    emoji: "🌐",
    headline: "Get yours at idmetech.com",
    subtext: "Start sharing smarter today →",
    style: "glow" as const,
    bgClass: "from-slate-950 to-cyan-950",
  },
];

const WORDS_SCENE3 = ["No", "app", "needed.", "Just", "scan."];

function ConfettiParticle({ index }: { index: number }) {
  const colors = [
    "#f59e0b",
    "#10b981",
    "#6366f1",
    "#ef4444",
    "#ec4899",
    "#14b8a6",
  ];
  const color = colors[index % colors.length];
  const size = 6 + (index % 5) * 2;
  const left = 10 + ((index * 17) % 80);
  const delay = (index * 0.12) % 1.2;
  const duration = 1.2 + (index % 5) * 0.2;
  return (
    <div
      style={{
        position: "absolute",
        left: `${left}%`,
        top: "-10px",
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: index % 3 === 0 ? "50%" : "2px",
        animation: `confettiFall ${duration}s ease-in ${delay}s both`,
        transform: `rotate(${index * 45}deg)`,
      }}
    />
  );
}

function WordReveal({ words, active }: { words: string[]; active: boolean }) {
  const [revealed, setRevealed] = useState(0);
  useEffect(() => {
    if (!active) {
      setRevealed(0);
      return;
    }
    setRevealed(0);
    const timers: ReturnType<typeof setTimeout>[] = [];
    words.forEach((_, i) => {
      timers.push(setTimeout(() => setRevealed(i + 1), i * 400));
    });
    return () => timers.forEach(clearTimeout);
  }, [active, words]);
  return (
    <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
      {words.map((word) => (
        <span
          key={word}
          style={{
            opacity: revealed > words.indexOf(word) ? 1 : 0,
            transform:
              revealed > words.indexOf(word)
                ? "translateY(0)"
                : "translateY(20px)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
            fontSize: "clamp(1.8rem, 7vw, 3rem)",
            fontWeight: 900,
            color: "white",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}

export default function TikTokPromoPage() {
  const [currentScene, setCurrentScene] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startProgress = useCallback(() => {
    setProgress(0);
    const start = Date.now();
    if (progressRef.current) clearInterval(progressRef.current);
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / SCENE_DURATION) * 100, 100));
    }, 30);
  }, []);

  const advanceScene = useCallback(() => {
    setCurrentScene((prev) => (prev + 1) % scenes.length);
    setAnimKey((k) => k + 1);
    startProgress();
  }, [startProgress]);

  useEffect(() => {
    if (playing) {
      startProgress();
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(advanceScene, SCENE_DURATION);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [playing, advanceScene, startProgress]);

  const handlePlayPause = () => setPlaying((p) => !p);

  const handleRestart = () => {
    setCurrentScene(0);
    setAnimKey((k) => k + 1);
    setPlaying(true);
  };

  const goToScene = (i: number) => {
    setCurrentScene(i);
    setAnimKey((k) => k + 1);
    startProgress();
  };

  const scene = scenes[currentScene];

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px 4px rgba(99,102,241,0.5); }
          50% { box-shadow: 0 0 40px 12px rgba(99,102,241,0.9); }
        }
        @keyframes confettiFall {
          0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(700px) rotate(720deg); opacity: 0; }
        }
        @keyframes burstIn {
          0% { opacity: 0; transform: scale(0.3) rotate(-5deg); }
          60% { transform: scale(1.08) rotate(1deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes floatQR {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-12px) scale(1.04); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #fff 25%, #22d3ee 50%, #fff 75%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 2s linear infinite;
        }
      `}</style>

      <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 py-8">
        <div
          className="mb-4 flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-300"
          data-ocid="tiktok.banner"
        >
          🎬 Screen-record this to create your TikTok!
        </div>

        <div
          className="relative overflow-hidden rounded-[2.5rem] border-4 border-slate-700 shadow-2xl"
          style={{
            width: 390,
            height: 844,
            maxWidth: "95vw",
            maxHeight: "80vh",
          }}
          data-ocid="tiktok.canvas_target"
        >
          {/* Background */}
          <div
            key={`bg-${animKey}`}
            className={`absolute inset-0 bg-gradient-to-b ${scene.bgClass}`}
            style={{ animation: "slideUp 0.4s ease both" }}
          />

          {/* Confetti */}
          {scene.style === "burst" && (
            <div
              key={`confetti-${animKey}`}
              className="pointer-events-none absolute inset-0 overflow-hidden"
            >
              {Array.from({ length: 28 }).map((_, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: confetti particles are purely decorative
                <ConfettiParticle key={i} index={i} />
              ))}
            </div>
          )}

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center">
            {/* Emoji */}
            <div
              key={`emoji-${animKey}`}
              style={{
                fontSize: "clamp(3rem, 12vw, 5rem)",
                animation:
                  scene.style === "burst"
                    ? "burstIn 0.6s cubic-bezier(0.34,1.56,0.64,1) both"
                    : "slideUp 0.5s ease both",
                animationDelay: "0.1s",
              }}
            >
              {scene.emoji}
            </div>

            {/* QR icon for scene 2 */}
            {scene.id === 2 && (
              <div
                key={`qr-${animKey}`}
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 16,
                  background: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation: "floatQR 2s ease-in-out infinite",
                  boxShadow: "0 0 30px 6px rgba(99,102,241,0.5)",
                }}
              >
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  aria-label="QR code icon"
                  role="img"
                >
                  <title>QR code</title>
                  <rect
                    x="4"
                    y="4"
                    width="24"
                    height="24"
                    rx="3"
                    fill="#1e293b"
                  />
                  <rect
                    x="8"
                    y="8"
                    width="16"
                    height="16"
                    rx="2"
                    fill="white"
                  />
                  <rect
                    x="11"
                    y="11"
                    width="10"
                    height="10"
                    rx="1"
                    fill="#1e293b"
                  />
                  <rect
                    x="36"
                    y="4"
                    width="24"
                    height="24"
                    rx="3"
                    fill="#1e293b"
                  />
                  <rect
                    x="40"
                    y="8"
                    width="16"
                    height="16"
                    rx="2"
                    fill="white"
                  />
                  <rect
                    x="43"
                    y="11"
                    width="10"
                    height="10"
                    rx="1"
                    fill="#1e293b"
                  />
                  <rect
                    x="4"
                    y="36"
                    width="24"
                    height="24"
                    rx="3"
                    fill="#1e293b"
                  />
                  <rect
                    x="8"
                    y="40"
                    width="16"
                    height="16"
                    rx="2"
                    fill="white"
                  />
                  <rect
                    x="11"
                    y="43"
                    width="10"
                    height="10"
                    rx="1"
                    fill="#1e293b"
                  />
                  <rect
                    x="36"
                    y="36"
                    width="6"
                    height="6"
                    rx="1"
                    fill="#1e293b"
                  />
                  <rect
                    x="46"
                    y="36"
                    width="6"
                    height="6"
                    rx="1"
                    fill="#1e293b"
                  />
                  <rect
                    x="56"
                    y="36"
                    width="6"
                    height="6"
                    rx="1"
                    fill="#1e293b"
                  />
                  <rect
                    x="36"
                    y="46"
                    width="6"
                    height="6"
                    rx="1"
                    fill="#1e293b"
                  />
                  <rect
                    x="46"
                    y="56"
                    width="6"
                    height="6"
                    rx="1"
                    fill="#1e293b"
                  />
                  <rect
                    x="56"
                    y="56"
                    width="6"
                    height="6"
                    rx="1"
                    fill="#1e293b"
                  />
                </svg>
              </div>
            )}

            {/* Headline */}
            {scene.style === "wordreveal" ? (
              <div key={`headline-${animKey}`}>
                <WordReveal words={WORDS_SCENE3} active={true} />
              </div>
            ) : scene.style === "burst" ? (
              <h2
                key={`headline-${animKey}`}
                style={{
                  fontSize: "clamp(2.4rem, 10vw, 4rem)",
                  fontWeight: 900,
                  color: "#fbbf24",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  animation:
                    "burstIn 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.2s both",
                  textShadow: "0 0 40px rgba(251,191,36,0.8)",
                }}
              >
                {scene.headline}
              </h2>
            ) : scene.style === "glow" && scene.id === 5 ? (
              <h2
                key={`headline-${animKey}`}
                className="shimmer-text"
                style={{
                  fontSize: "clamp(1.6rem, 6vw, 2.5rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  animation: "slideUp 0.55s ease 0.15s both",
                }}
              >
                {scene.headline}
              </h2>
            ) : (
              <h2
                key={`headline-${animKey}`}
                style={{
                  fontSize: "clamp(2rem, 8vw, 3.2rem)",
                  fontWeight: 900,
                  color: "white",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  animation: "slideUp 0.55s ease 0.15s both",
                }}
              >
                {scene.headline}
              </h2>
            )}

            {/* Subtext */}
            {scene.subtext && (
              <p
                key={`sub-${animKey}`}
                style={{
                  fontSize: "clamp(0.95rem, 3.5vw, 1.2rem)",
                  color: "rgba(255,255,255,0.7)",
                  fontWeight: 500,
                  animation: "slideUp 0.6s ease 0.45s both",
                  letterSpacing: "0.01em",
                }}
              >
                {scene.subtext}
              </p>
            )}

            {/* CTA for scene 5 */}
            {scene.id === 5 && (
              <a
                key={`cta-${animKey}`}
                href="https://idmetech.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: 8,
                  padding: "14px 32px",
                  borderRadius: 999,
                  background: "linear-gradient(135deg, #06b6d4, #6366f1)",
                  color: "white",
                  fontWeight: 800,
                  fontSize: "1rem",
                  textDecoration: "none",
                  animation:
                    "slideUp 0.65s ease 0.6s both, pulse-glow 2s ease-in-out 1.2s infinite",
                  boxShadow: "0 0 24px 4px rgba(99,102,241,0.5)",
                  letterSpacing: "0.02em",
                }}
                data-ocid="tiktok.link"
              >
                Get SmartQR Free →
              </a>
            )}
          </div>

          {/* Dots */}
          <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-1.5">
            {scenes.map((s, i) => (
              <button
                type="button"
                key={s.id}
                onClick={() => goToScene(i)}
                aria-label={`Scene ${i + 1}`}
                data-ocid="tiktok.tab"
                style={{
                  width: i === currentScene ? 20 : 6,
                  height: 6,
                  borderRadius: 3,
                  background:
                    i === currentScene ? "#22d3ee" : "rgba(255,255,255,0.3)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-16 left-6 right-6">
            <div className="h-1 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-cyan-400"
                style={{ width: `${progress}%`, transition: "none" }}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-3">
            <Button
              size="sm"
              variant="outline"
              onClick={handleRestart}
              data-ocid="tiktok.secondary_button"
              className="gap-1.5 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Restart
            </Button>
            <Button
              size="sm"
              onClick={handlePlayPause}
              data-ocid="tiktok.primary_button"
              className="gap-1.5 bg-cyan-500 text-white hover:bg-cyan-400"
            >
              {playing ? (
                <Pause className="h-3.5 w-3.5" />
              ) : (
                <Play className="h-3.5 w-3.5" />
              )}
              {playing ? "Pause" : "Play"}
            </Button>
          </div>
        </div>

        <div className="mt-6 max-w-sm text-center text-sm text-slate-400">
          <p className="mb-1 font-medium text-slate-300">
            How to make your TikTok video:
          </p>
          <ol className="space-y-0.5 text-left">
            <li>
              1. Hit <strong className="text-white">Play</strong> and start a
              screen recording
            </li>
            <li>2. Let all 5 scenes loop through once</li>
            <li>3. Stop recording — you have your promo clip!</li>
            <li>4. Upload to TikTok, Reels, or Shorts 🚀</li>
          </ol>
        </div>
      </div>
    </>
  );
}
