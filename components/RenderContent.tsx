import React from "react"; // 👈 adaugă
import ProductCard from "./ProductCard";

function parseShortcodes(content: string) {
  const parts: (string | React.ReactElement)[] = [];
  const regex = /\[produs([^\]]+)\]/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(content)) !== null) {
    // Text înainte de shortcode
    if (match.index > lastIndex) {
      parts.push(content.slice(lastIndex, match.index));
    }

    // Parsează atributele
    const attrs = match[1];
    const get = (key: string) =>
      attrs.match(new RegExp(`${key}="([^"]+)"`))?.[1] ?? "";

    parts.push(
      <ProductCard
        key={match.index}
        nume={get("nume")}
        imagine={get("imagine")}
        introducere={get("descriere")}
        link={get("link")}
      />,
    );

    lastIndex = regex.lastIndex;
  }

  // Text rămas după ultimul shortcode
  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }

  return parts;
}

export default function RenderContent({ content }: { content: string }) {
  return <div>{parseShortcodes(content)}</div>;
}
