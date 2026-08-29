// SkeletonLoading/ProgressPage/SkeletonTipsBar.jsx
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonTipsBar = () => (
  <div className="bg-white rounded-2xl border border-[#9B7A5B]/15 px-5 py-4 flex items-center gap-3">
    <Skeleton width={32} height={32} style={{ borderRadius: "0.75rem" }} />
    <Skeleton width={80} height={12} />
    <Skeleton width="55%" height={12} style={{ marginLeft: 4 }} />
  </div>
);

export default SkeletonTipsBar;
