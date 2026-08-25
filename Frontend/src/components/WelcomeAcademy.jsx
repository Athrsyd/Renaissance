import React from "react";

const WelcomeAcademy = ({ user, grade }) => {
  return (
    <div className="relative bg-[#F8F3E0] w-full mt-6 p-10 rounded-2xl border border-[#9B7A5B]/30 
    ">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-monstserrat font-semibold text-[#39221C]">
          <span className="text-icon">Hello,</span> {user?.name || "Student"}!
        </h1>
        <p className="text-sm lg:text-base font-medium text-[#39221C]/90 leading-relaxed">
          {grade
            ? `Semangat belajar hari ini! Setiap langkah kecil membawamu lebih dekat ke masa depan gemilang.`
            : `Semangat belajar hari ini! Pilih mata pelajaran di bawah untuk mulai menjelajahi materi kelas ${grade || ""}.`}
        </p>
      </div>
    </div>
  );
};

export default WelcomeAcademy;