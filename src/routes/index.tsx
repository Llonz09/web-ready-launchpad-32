import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Workplace Productivity Assistant" },
      {
        name: "description",
        content:
          "Plan tasks with an Eisenhower matrix, analyze research, and optimize your workday with the AI Workplace Productivity Assistant.",
      },
      { property: "og:title", content: "AI Workplace Productivity Assistant" },
      {
        property: "og:description",
        content:
          "Plan tasks with an Eisenhower matrix, analyze research, and optimize your workday.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/app/index.html"
      title="AI Workplace Productivity Assistant"
      className="block h-screen w-screen border-0"
    />
  );
}
