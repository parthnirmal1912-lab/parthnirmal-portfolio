export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatMetric(
  value: number,
  { prefix = "", suffix = "", decimals = 0 }: {
    prefix?: string;
    suffix?: string;
    decimals?: number;
  } = {},
) {
  return `${prefix}${value.toFixed(decimals)}${suffix}`;
}
