// SkeletonLoading/ProgressPage/SkeletonAchievementsCard.jsx
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonAchievementsCard = () => (
  <div className="bg-white rounded-2xl border border-[#9B7A5B]/15 p-5">
    <Skeleton width={140} height={16} style={{ marginBottom: 6 }} />
    <Skeleton width={190} height={11} style={{ marginBottom: 16 }} />
    <div className="grid grid-cols-3 gap-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex flex-col items-center gap-1.5">
          <Skeleton width={56} height={56} style={{ borderRadius: "1rem" }} />
          <Skeleton width={48} height={9} />
        </div>
      ))}
    </div>
  </div>
);

export default SkeletonAchievementsCard;
