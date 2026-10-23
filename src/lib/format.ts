const monthFormat = new Intl.DateTimeFormat("en-GB", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

// "2025-01" -> "Jan 2025"
export function formatMonth(value: string): string {
  return monthFormat.format(new Date(`${value}-01T00:00:00Z`));
}
