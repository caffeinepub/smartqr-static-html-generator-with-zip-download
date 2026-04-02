import { ExternalLink } from "lucide-react";

export default function TikTokPromo2Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div
        className="mb-4 flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-300"
        data-ocid="tiktok2.banner"
      >
        🎬 SmartQR Promo V2 — Fresh scene sequence!
      </div>

      <div
        className="relative overflow-hidden rounded-[2.5rem] border-4 border-slate-700 shadow-2xl"
        style={{
          width: 390,
          maxWidth: "95vw",
        }}
        data-ocid="tiktok2.canvas_target"
      >
        <iframe
          src="/tiktok-promo2.html"
          title="SmartQR TikTok Promo V2"
          style={{
            width: 390,
            height: 844,
            maxWidth: "95vw",
            maxHeight: "80vh",
            border: "none",
            display: "block",
          }}
          allowFullScreen
        />
      </div>

      <div className="mt-6 flex items-center gap-3">
        <a
          href="/tiktok-promo2.html"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-colors hover:bg-cyan-500/20"
          data-ocid="tiktok2.link"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Open Full Screen
        </a>
      </div>

      <div className="mt-4 max-w-sm text-center text-sm text-slate-400">
        <p className="mb-1 font-medium text-slate-300">
          How to make your TikTok video:
        </p>
        <ol className="space-y-0.5 text-left">
          <li>1. Open full screen and start screen recording</li>
          <li>2. Let all 6 scenes loop through once</li>
          <li>3. Stop recording — you have your promo clip!</li>
          <li>4. Upload to TikTok, Reels, or Shorts 🚀</li>
        </ol>
      </div>
    </div>
  );
}
