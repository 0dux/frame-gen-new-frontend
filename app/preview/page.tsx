"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { yt_html } from "../assets/assets";

const YtPreviewContent = () => {
  const searchParams = useSearchParams();
  const thumbnail_url = searchParams.get("thumbnail_url") || "";
  const title = searchParams.get("title") || "Demo Title";

  const new_html = yt_html
    .replace("%%THUMBNAIL_URL%%", thumbnail_url)
    .replace("%%TITLE%%", title);

  return (
    <div className="fixed inset-0 z-100 bg-black">
      <iframe
        srcDoc={new_html}
        className="h-full w-full border-none"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const YtPreview = () => {
  return (
    <Suspense fallback={<div className="fixed inset-0 bg-black flex items-center justify-center text-white">Loading Preview...</div>}>
      <YtPreviewContent />
    </Suspense>
  );
};

export default YtPreview;
