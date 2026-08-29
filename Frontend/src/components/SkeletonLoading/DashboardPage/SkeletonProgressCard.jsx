import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonProgressCard = () => {
  return (
    <div className="w-full lg:w-90 h-auto lg:h-55 bg-white border-[1.75px] border-chamoisee/20 rounded-xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <Skeleton width={70} height={18} />
        <Skeleton width={80} height={12} />
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="w-32 h-32 shrink-0 flex items-center justify-center">
          <Skeleton circle width={128} height={128} />
        </div>

        <div className="flex flex-col gap-4 w-full sm:w-auto">
          <div>
            <Skeleton width={90} height={12} style={{ marginBottom: 6 }} />
            <Skeleton width={60} height={22} />
          </div>
          <div>
            <Skeleton width={90} height={12} style={{ marginBottom: 6 }} />
            <Skeleton width={70} height={22} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonProgressCard;
