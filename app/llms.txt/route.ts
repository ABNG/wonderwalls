import {
  address,
  email,
  phone,
  services,
  siteDescription,
  siteName,
  siteUrl,
  whatsappUrl,
} from "@/lib/content";

// Plain-text summary for AI assistants and answer engines (llmstxt.org).
export const dynamic = "force-static";

export function GET() {
  const body = `# ${siteName}

> ${siteDescription}

${siteName} is a building and finishing team based in ${address}. For over 18 years we have painted, plastered and built homes across the north coast of Cyprus, in local black and yellow stone. We speak English and Turkish.

## Services

${services.map((s) => `- ${s.name}: ${s.description}`).join("\n")}

## Contact

- WhatsApp: ${whatsappUrl}
- Phone (English, ${phone.english.name}): ${phone.english.display}
- Phone (Turkish, ${phone.turkish.name}): ${phone.turkish.display}
- Email: ${email}
- Area: ${address}

## Pages

- [Home](${siteUrl}/): services, about, contact
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
