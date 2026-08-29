// SkeletonLoading/ProgressPage/SkeletonLevelBanner.jsx
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLevelBanner = () => (
  <div
    className="mb-5 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-5"
    style={{
      background: "linear-gradient(135deg,#F8F3E0 0%,#f0e5cf 100%)",
      border: "1.5px solid rgba(155,122,91,0.2)",
    }}
  >
    <Skeleton circle width={80} height={80} />
    <div className="flex-1 w-full">
      <Skeleton width={110} height={10} style={{ marginBottom: 6 }} />
      <Skeleton width={140} height={30} style={{ marginBottom: 6 }} />
      <Skeleton width={160} height={14} style={{ marginBottom: 10 }} />
      <Skeleton height={10} style={{ borderRadius: "9999px" }} />
      <div className="flex justify-between mt-1">
        <Skeleton width={60} height={10} />
        <Skeleton width={60} height={10} />
      </div>
    </div>
    <div className="hidden sm:block shrink-0 w-36">
      <Skeleton width={90} height={12} style={{ marginBottom: 6 }} />
      <Skeleton height={10} style={{ marginBottom: 4 }} />
      <Skeleton height={10} width="80%" />
    </div>
  </div>
);

export default SkeletonLevelBanner;
