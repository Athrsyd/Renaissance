// SkeletonLoading/DashboardPage/SkeletonStatCard.jsx
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonStatCard = () => {
  return (
    <div className="flex items-center gap-3 bg-white border border-beige rounded-2xl p-4">
      <Skeleton circle width={60} height={60} />
      <div>
        <Skeleton width={40} height={20} style={{ marginBottom: 6 }} />
        <Skeleton width={80} height={11} style={{ marginBottom: 4 }} />
        <Skeleton width={60} height={9} />
      </div>
    </div>
  );
};

export default SkeletonStatCard;
