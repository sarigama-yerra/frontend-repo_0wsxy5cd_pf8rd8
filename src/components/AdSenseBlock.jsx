import { useEffect } from "react";

// This component renders a Google AdSense block. To enable real ads:
// 1) Replace data-ad-client with your publisher ID.
// 2) Replace data-ad-slot with your ad slot ID.
// 3) In index.html, add the script tag that loads AdSense (we'll add it automatically in App layout too).

export default function AdSenseBlock({ slot = "0000000000", format = "auto", layout = "in-article" }) {
  useEffect(() => {
    try {
      if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      // ignore if not available in dev
    }
  }, []);

  return (
    <ins
      className="adsbygoogle block"
      style={{ display: "block" }}
      data-ad-client="ca-pub-0000000000000000"
      data-ad-slot={slot}
      data-ad-format={format}
      data-ad-layout={layout}
      data-full-width-responsive="true"
    />
  );
}
