import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const WEEK_DAYS_COUNT = 7;

const SkeletonStreakCard = () => {
  return (
    <div className="relative lg:absolute lg:right-10 w-full lg:w-140 h-65 lg:h-55 bg-white border-[1.75px] border-chamoisee/20 rounded-xl p-4 sm:p-6">
      <Skeleton width={60} height={18} style={{ marginBottom: 16 }} />

      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
        <div className="lg:ml-0 ml-15 flex items-center mt-0 lg:mt-5 gap-2 shrink-0">
          <Skeleton width={36} height={36} style={{ borderRadius: "0.5rem" }} />
          <div>
            <Skeleton width={70} height={28} style={{ marginBottom: 6 }} />
            <Skeleton width={110} height={10} />
          </div>
        </div>

        <div className="absolute left-42 bottom-8 hidden lg:block w-px h-40 bg-beige" />

        <div className="relative w-full lg:ml-15">
          <div className="flex justify-center gap-2 sm:gap-4 flex-wrap">
            {Array.from({ length: WEEK_DAYS_COUNT }).map((_, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1.5">
                <Skeleton circle width={32} height={32} />
                <Skeleton width={16} height={10} />
              </div>
            ))}
          </div>
          <div className="lg:absolute right-2 mt-3 w-82">
            <Skeleton height={40} style={{ borderRadius: "0.75rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonStreakCard;
