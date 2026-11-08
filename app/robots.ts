import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/content";

// Open to all crawlers, including AI search bots (GPTBot, ClaudeBot, PerplexityBot).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
