// SkeletonLoading/ProgressPage/SkeletonClassProgressCard.jsx
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonClassProgressCard = () => (
  <div className="bg-white rounded-2xl border border-[#9B7A5B]/15 p-5">
    <Skeleton width={200} height={16} style={{ marginBottom: 6 }} />
    <Skeleton width={230} height={11} style={{ marginBottom: 16 }} />
    <div className="flex items-center gap-5">
      <Skeleton circle width={112} height={112} />
      <div className="flex-1">
        <Skeleton width={150} height={12} style={{ marginBottom: 8 }} />
        <div className="flex gap-1 flex-wrap mb-2">
          {Array.from({ length: 15 }).map((_, i) => (
            <Skeleton
              key={i}
              height={10}
              style={{
                flex: "1 1 auto",
                minWidth: 12,
                borderRadius: "0.125rem",
              }}
            />
          ))}
        </div>
        <Skeleton width={180} height={11} style={{ marginBottom: 10 }} />
        <Skeleton width={140} height={28} style={{ borderRadius: "0.75rem" }} />
      </div>
    </div>
  </div>
);

export default SkeletonClassProgressCard;
