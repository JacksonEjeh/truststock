import { useMemo } from "react";

export default function InvestmentProgress({ startDate, maturityDate }) {
  const progress = useMemo(() => {
    const start = new Date(startDate);
    const end = new Date(maturityDate);
    const now = new Date();

    const total = end - start;         // total duration (ms)
    const elapsed = now - start;       // time passed (ms)

    // Clamp between 0 and total
    return Math.min(Math.max(elapsed, 0), total);
  }, [startDate, maturityDate]);

  const max = useMemo(() => {
    const start = new Date(startDate);
    const end = new Date(maturityDate);
    return end - start; // total ms span
  }, [startDate, maturityDate]);

  return (
    <div className="w-full max-w-md relative">
      <progress
        className="progress progress-primary w-full relative z-10"
        value={progress}
        max={max}
      />
    </div>
  );
}
