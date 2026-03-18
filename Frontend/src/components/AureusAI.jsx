import React from 'react'


const AureusAI = () => {
    return (
        <section className="lg:w-9/10 w-9.8/10 px-10 sm:px-16 lg:px-24 mt-8">
            <div className="relative overflow-hidden rounded-[28px] shadow-[0_10px_24px_rgba(57,34,28,0.2)] bg-[url('/AiDashboardBG.png')] opacity-85  bg-cover bg-center">
                <div className="absolute inset-0 opacity-35">
                    <div className="absolute -left-20 top-8 h-44 w-[70%] rotate-[-8deg] rounded-[100%] bg-[#E8C79C] blur-xl" />
                    <div className="absolute right-[-10%] top-[-18%] h-56 w-[70%] rotate-6 rounded-[100%] bg-[#C18763] blur-xl" />
                    <div className="absolute left-[25%] bottom-[-28%] h-64 w-[65%] rounded-[100%] bg-[#6D4333] blur-2xl" />
                </div>

                <div className="relative z-10 ">
                    <h2 className="text-center pt-10 text-3xl sm:text-4xl font-semibold text-[#4B2216]">Aureus AI</h2>

                    <div className="relative mt-10">
                        <svg
                            className="block w-full h-14 sm:h-16"
                            viewBox="0 0 1200 130"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M0,120 C240,20 470,170 710,95 C910,40 1040,80 1200,30 L1200,130 L0,130 Z"
                                fill="rgba(90,63,54,0.62)"
                            />
                            <path
                                d="M0,120 C240,20 470,170 710,95 C910,40 1040,80 1200,30"
                                fill="none"
                                stroke="rgba(248,241,231,0.6)"
                                strokeWidth="2"
                            />
                        </svg>

                        <div className="-mt-px rounded-b-[28px] bg-[rgba(90,63,54,0.62)] px-2 lg:px-35 pb-7 pt-5 sm:px-10 sm:pb-10 sm:pt-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-[3px]">
                            <p className="text-beige px-10 text-sm lg:text-xl md:text-xl sm:text-2xl text-left w-90 lg:w-160 md:w-140 lg:text-justify font-semibold leading-tight tracking-wide">
                                Teman belajar digital yang membantu menjawab pertanyaan, menjelaskan materi, dan membimbingmu memahami pelajaran dengan lebih jelas dan efektif.
                            </p>

                            <div className="mt-6 sm:mt-8 flex justify-center">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center rounded-2xl bg-[#4A281E] px-8 py-2.5 text-xl font-semibold text-[#F7ECE0] transition hover:bg-[#3D2018]"
                                >
                                    Ask Aureus
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AureusAI