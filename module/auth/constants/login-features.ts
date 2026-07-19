export const features = [
    "AI powered pull request reviews",
    "Security & vulnerability detection",
    "Instant code suggestions",
    "GitHub native integration",
];

export const REVIEW_LINES = [
    { type: "neutral", text: "export function canAccess(user: User) {" },
    { type: "removed", text: "  if (user.isAdmin) {" },
    { type: "added", text: "  if (user?.isAdmin) {" },
    { type: "neutral", text: "    return true" },
    { type: "neutral", text: "  }" },
    { type: "comment", text: "  // unauthenticated requests fall through" },
    { type: "added", text: "  return false" },
    { type: "neutral", text: "}" },
] as const;

export const REVIEW_STATS = [
    { label: "Null check patched", tone: "add" },
    { label: "Security +12%", tone: "add" },
    { label: "Complexity −8%", tone: "neutral" },
    { label: "Ready to merge", tone: "ready" },
] as const;