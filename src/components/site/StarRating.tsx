export function StarRating({ value }: { value: number }) {
  const full = Math.round(Math.min(5, Math.max(0, value)));
  return (
    <span className="text-copper tracking-tight" aria-label={`${full} out of 5 stars`}>
      {"★".repeat(full)}
      <span className="text-ink/25">{"☆".repeat(5 - full)}</span>
    </span>
  );
}
