// SkeletonLoading/DashboardPage/SkeletonStatGrid.jsx
import React from "react";
import SkeletonStatCard from "./SkeletonStatCard";

const SkeletonStatGrid = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      {[1, 2, 3, 4].map((i) => (
        <SkeletonStatCard key={i} />
      ))}
    </div>
  );
};

export default SkeletonStatGrid;