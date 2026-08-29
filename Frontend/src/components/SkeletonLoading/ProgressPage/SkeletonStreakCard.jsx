// SkeletonLoading/ProgressPage/SkeletonStreakCard.jsx
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonStreakCard = () => (
  <div className="bg-white rounded-2xl border border-[#9B7A5B]/15 p-5">
    <Skeleton width={100} height={16} style={{ marginBottom: 6 }} />
    <Skeleton width={170} height={11} style={{ marginBottom: 12 }} />

    <div className="flex items-center gap-3 mb-4">
      <Skeleton width={56} height={56} style={{ borderRadius: "1rem" }} />
      <div>
        <Skeleton width={90} height={28} style={{ marginBottom: 6 }} />
        <Skeleton width={140} height={11} />
      </div>
    </div>

    <div className="flex justify-between gap-1 mb-3">
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <Skeleton circle width={32} height={32} />
          <Skeleton width={16} height={9} />
        </div>
      ))}
    </div>

    <Skeleton height={34} style={{ borderRadius: "0.75rem" }} />
  </div>
);

export default SkeletonStreakCard;
