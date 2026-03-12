import React from "react";

// Assets Icon
import iconBintang from "../assets/icon/iconBintang.png";
import iconKertas from "../assets/icon/iconKertas.png";
import iconComunity from "../assets/icon/iconComunity.png";
import iconChart from "../assets/icon/iconChart.png";
import iconAi from "../assets/icon/iconAi.png";
import bintangs from "../assets/icon/bintangs.png";

// Assets Profile What They Say
import nares from "../assets/displayProfile/nares.jpg";
import william from "../assets/displayProfile/2_william.jpg";
import cinta from "../assets/displayProfile/3_cinta.jpg";
import genta from "../assets/displayProfile/4_genta.jpg";
import arsi from "../assets/displayProfile/5_arsi.jpg";
import mahendra from "../assets/displayProfile/6_mahendra.jpg";

const LandingPage2 = () => {
  return (
    // Renaissance Nixon Areas
    <section className=" bg-[#F2E0D2] h-full pt-10 overflow-x-hidden overflow-y-hidden rounded-t-utama -mt-15">
      <div className="flex items-center text-bistre text-5xl justify-center font-medium gap-15 font-poppins">
        <img src={iconBintang} alt="" className="w-11 h-11 self-center" />
        <h1 className="m-0">Renaissance Experience</h1>
        <img
          src={iconBintang}
          alt=""
          className="w-11 h-11 self-center mt-0.5"
        />
      </div>

      {/* Display Kotak */}
      <div className="mt-25 flex justify-center flex-wrap gap-17">
        <div className="bg-bistre w-100 h-70 p-7 rounded-2xl">
          <div className="flex items-center border-b-3 border-[#9B7A5B] font-poppins pb-1.5">
            <img src={iconKertas} alt="" className="w-15 h-15" />
            <h1 className="bg-linear-to-r from-[#9B7A5B] to-[#CAB99F] text-transparent bg-clip-text text-2xl font-semibold ml-2.5">
              Interactive Learn
            </h1>
          </div>

          <div className="mt-5 text-white font-medium font-monstserrat text-lg">
            <p>
              Materi pembelajaran disajikan secara interaktif melalui visual,
              latihan soal, dan aktivitas yang membantu siswa memahami konsep
              dengan lebih mudah.
            </p>
          </div>
        </div>

        <div className="bg-bistre w-100 h-70 p-7 rounded-2xl">
          <div className="flex items-center border-b-3 border-[#9B7A5B] font-poppins pb-1.5">
            <img src={iconAi} alt="" className="w-14 h-14" />
            <h1 className="bg-linear-to-r from-[#9B7A5B] to-[#CAB99F] text-transparent bg-clip-text text-2xl font-semibold ml-2.5">
              AI Assistant
            </h1>
          </div>

          <div className="mt-5 text-white font-medium font-monstserrat text-lg">
            <p>
              Didukung oleh kecerdasan buatan yang membantu siswa menjawab
              pertanyaan, menjelaskan materi, dan memberikan panduan belajar
              secara instan.
            </p>
          </div>
        </div>

        <div className="bg-bistre w-100 h-70 p-7 rounded-2xl">
          <div className="flex items-center border-b-3 border-[#9B7A5B] font-poppins pb-1.5">
            <img src={iconComunity} alt="" className="w-14 h-14" />
            <h1 className="bg-linear-to-r from-[#9B7A5B] to-[#CAB99F] text-transparent bg-clip-text text-2xl font-semibold ml-2.5">
              Community
            </h1>
          </div>

          <div className="mt-5 text-white font-medium font-monstserrat text-lg">
            <p>
              Siswa dapat berdiskusi, berbagi pengetahuan, dan saling membantu
              dalam komunitas belajar yang aktif dan kolaboratif.
            </p>
          </div>
        </div>

        <div className="bg-bistre w-100 h-70 p-7 rounded-2xl">
          <div className="flex items-center border-b-3 border-[#9B7A5B] font-poppins pb-1.5">
            <img src={iconChart} alt="" className="w-14 h-14" />
            <h1 className="bg-linear-to-r from-[#9B7A5B] to-[#CAB99F] text-transparent bg-clip-text text-2xl font-semibold ml-2.5">
              Progress Learn
            </h1>
          </div>

          <div className="mt-5 text-white font-medium font-monstserrat text-lg">
            <p>
              Memantau perkembangan belajar melalui statistik dan pencapaian
              yang membantu siswa tetap termotivasi.
            </p>
          </div>
        </div>
      </div>

      {/* Container Bridging */}
      <div className="mt-40 w-full bg-[#CBB799]">
        <div className="flex items-center gap-16 font-poppins text-5xl text-[#f4e4d8] font-bold bg-[#9B7A5B] p-6 justify-center -rotate-3 ">
          <img src={iconBintang} alt="" className="w-12 h-12" />
          <h1>Learn</h1>
          <img src={iconBintang} alt="" className="w-12 h-12" />
          <h1>Innovate</h1>
          <img src={iconBintang} alt="" className="w-12 h-12" />
          <h1>Evolve</h1>
          <img src={iconBintang} alt="" className="w-12 h-12" />
        </div>
      </div>

      {/* What Student Say */}
      <div className="h-full bg-bistre">
        <div className="text-5xl pt-23 flex justify-center font-poppins bg-linear-to-r from-[#9B7A5B] to-[#dcceb9] text-transparent bg-clip-text font-semibold">
          <h1>What Students Say</h1>
        </div>

        <div>
          {/* kotak container 1 */}
          <div className="font-poppins mt-15 flex gap-7 overflow-x-hidden w-max animate-slide">
            {/* card 1 */}
            <div className="bg-white w-140 h-70 p-4 rounded-tr-3xl rounded-br-3xl">
              <div className="flex gap-5 items-center">
                <img src={nares} alt="" className="w-15 h-15 rounded-full" />
                <div>
                  <h1 className="text-black font-semibold text-lg">
                    Naresha Letrakusuma
                  </h1>
                  <p className="-mt-1 text-base font-">Grade 12</p>
                </div>
                <p className="-mt-4.5 -mr-2.5 font-extralight">3w Ago</p>
              </div>

              <div className="mt-3 font-semibold">
                <p>
                  Belajar di Renaissance terasa jauh lebih menyenangkan
                  dibandingkan platform belajar lain yang pernah aku coba.
                  Materinya dijelaskan dengan jelas dan tampilannya juga nyaman
                  dilihat, jadi aku bisa belajar lebih lama tanpa merasa bosan
                </p>
                <img src={bintangs} alt="" className="-ml-3" />
              </div>
            </div>

            {/* card 2 */}
            <div className="bg-white w-145 h-70 p-4 rounded-tr-3xl rounded-3xl ">
              <div className="flex gap-5 items-center">
                <img src={william} alt="" className="w-15 h-15 rounded-full" />
                <div>
                  <h1 className="text-black font-semibold text-lg">
                    William Jakraputra
                  </h1>
                  <p className="-mt-1 text-base font-">Grade 10</p>
                </div>
                <p className="-mt-4.5 -mr-2.5 font-extralight">3w Ago</p>
              </div>

              <div className="mt-3 font-semibold">
                <p>
                  Fitur AI di Renaissance sangat membantu ketika aku kesulitan
                  memahami soal. Penjelasannya cepat dan bahasanya mudah
                  dimengerti, jadi aku bisa langsung paham tanpa harus mencari
                  jawaban di tempat lain.
                </p>
                <img src={bintangs} alt="" className="-ml-3" />
              </div>
            </div>

            {/* card 3 */}
            <div className="bg-white w-130 h-70 p-4 rounded-tr-3xl rounded-3xl ">
              <div className="flex gap-5 items-center">
                <img src={cinta} alt="" className="w-15 h-15 rounded-full" />
                <div>
                  <h1 className="text-black font-semibold text-lg">
                    Cinta Reynasya
                  </h1>
                  <p className="-mt-1 text-base font-">Grade 12</p>
                </div>
                <p className="-mt-4.5 -mr-2.5 font-extralight">1w Ago</p>
              </div>

              <div className="mt-3 font-semibold">
                <p>
                  Yang paling aku suka adalah fitur komunitasnya. Aku bisa
                  berdiskusi dengan siswa lain, bertanya kalau ada materi yang
                  sulit, dan kadang juga membantu menjelaskan ke teman lain
                </p>
                <img src={bintangs} alt="" className="-ml-3" />
              </div>
            </div>

            {/* Duplicate */}
            {/* card 1 */}
            <div className="bg-white w-140 h-70 p-4 rounded-3xl">
              <div className="flex gap-5 items-center">
                <img src={nares} alt="" className="w-15 h-15 rounded-full" />
                <div>
                  <h1 className="text-black font-semibold text-lg">
                    Naresha Letrakusuma
                  </h1>
                  <p className="-mt-1 text-base font-">Grade 12</p>
                </div>
                <p className="-mt-4.5 -mr-2.5 font-extralight">3w Ago</p>
              </div>

              <div className="mt-3 font-semibold">
                <p>
                  Belajar di Renaissance terasa jauh lebih menyenangkan
                  dibandingkan platform belajar lain yang pernah aku coba.
                  Materinya dijelaskan dengan jelas dan tampilannya juga nyaman
                  dilihat, jadi aku bisa belajar lebih lama tanpa merasa bosan
                </p>
                <img src={bintangs} alt="" className="-ml-3" />
              </div>
            </div>

            {/* card 2 */}
            <div className="bg-white w-145 h-70 p-4 rounded-tr-3xl rounded-3xl ">
              <div className="flex gap-5 items-center">
                <img src={william} alt="" className="w-15 h-15 rounded-full" />
                <div>
                  <h1 className="text-black font-semibold text-lg">
                    William Jakraputra
                  </h1>
                  <p className="-mt-1 text-base font-">Grade 10</p>
                </div>
                <p className="-mt-4.5 -mr-2.5 font-extralight">3w Ago</p>
              </div>

              <div className="mt-3 font-semibold">
                <p>
                  Fitur AI di Renaissance sangat membantu ketika aku kesulitan
                  memahami soal. Penjelasannya cepat dan bahasanya mudah
                  dimengerti, jadi aku bisa langsung paham tanpa harus mencari
                  jawaban di tempat lain.
                </p>
                <img src={bintangs} alt="" className="-ml-3" />
              </div>
            </div>

            {/* card 3 */}
            <div className="bg-white w-130 h-70 p-4 rounded-tr-3xl rounded-3xl -mr-20">
              <div className="flex gap-5 items-center">
                <img src={cinta} alt="" className="w-15 h-15 rounded-full" />
                <div>
                  <h1 className="text-black font-semibold text-lg">
                    Cinta Reynasya
                  </h1>
                  <p className="-mt-1 text-base font-">Grade 12</p>
                </div>
                <p className="-mt-4.5 -mr-2.5 font-extralight">3w Ago</p>
              </div>

              <div className="mt-3 font-semibold">
                <p>
                  Yang paling aku suka adalah fitur komunitasnya. Aku bisa
                  berdiskusi dengan siswa lain, bertanya kalau ada materi yang
                  sulit, dan kadang juga membantu menjelaskan ke teman lain
                </p>
                <img src={bintangs} alt="" className="-ml-3" />
              </div>
            </div>
          </div>
        </div>

        {/* kotak container 2 */}
        <div className="font-poppins mt-5 flex gap-7 overflow-x-hidden w-max animate-slide-reverse">
          {/* card 4 */}
          <div className="bg-white w-140 h-70 p-4 rounded-3xl -ml-20 ">
            <div className="flex gap-5 items-center">
              <img src={genta} alt="" className="w-15 h-15 rounded-full" />
              <div>
                <h1 className="text-black font-semibold text-lg">
                  Genta Narendra
                </h1>
                <p className="-mt-1 text-base font-">Grade 9</p>
              </div>
              <p className="-mt-4.5 -mr-2.5 font-extralight">2w Ago</p>
            </div>

            <div className="mt-3 font-semibold">
              <p>
                Pembelajarannya interaktif dan tidak membosankan. Ada banyak
                cara untuk memahami materi, jadi rasanya seperti belajar sambil
                eksplorasi, bukan hanya membaca teks saja
              </p>
              <img src={bintangs} alt="" className="-ml-3" />
            </div>
          </div>

          {/* card 5 */}
          <div className="bg-white w-150 h-70 p-4 rounded-tr-3xl rounded-3xl">
            <div className="flex gap-5 items-center">
              <img src={mahendra} alt="" className="w-15 h-15 rounded-full" />
              <div>
                <h1 className="text-black font-semibold text-lg">
                  Mahendra Pratama
                </h1>
                <p className="-mt-1 text-base font-">Grade 12</p>
              </div>
              <p className="-mt-4.5 -mr-2.5 font-extralight">3w Ago</p>
            </div>

            <div className="mt-3 font-semibold">
              <p>
                Renaissance membuat belajar terasa lebih terstruktur. Aku bisa
                melihat materi dengan jelas dan belajar secara bertahap tanpa
                merasa kewalahan
              </p>
              <img src={bintangs} alt="" className="-ml-3" />
            </div>
          </div>

          {/* card 6 */}
          <div className="bg-white w-135 h-70 p-4 rounded-tr-3xl rounded-3xl">
            <div className="flex gap-5 items-center">
              <img src={arsi} alt="" className="w-15 h-15 rounded-full" />
              <div>
                <h1 className="text-black font-semibold text-lg">
                  Arsi Kealan
                </h1>
                <p className="-mt-1 text-base font-">Grade 7</p>
              </div>
              <p className="-mt-4.5 -mr-2.5 font-extralight">1w Ago</p>
            </div>

            <div className="mt-3 font-semibold">
              <p>
                Awalnya aku mencoba Renaissance karena direkomendasikan oleh
                teman. Setelah mencobanya, aku merasa platform ini benar-benar
                membantu memahami beberapa pelajaran yang sebelumnya terasa
                sulit
              </p>
              <img src={bintangs} alt="" className="-ml-3" />
            </div>
          </div>

          {/* Duplicate */}
          {/* card 4 */}
          <div className="bg-white w-140 h-70 p-4 rounded-3xl">
            <div className="flex gap-5 items-center">
              <img src={genta} alt="" className="w-15 h-15 rounded-full" />
              <div>
                <h1 className="text-black font-semibold text-lg">
                   Genta Narendra
                </h1>
                <p className="-mt-1 text-base font-">Grade 12</p>
              </div>
              <p className="-mt-4.5 -mr-2.5 font-extralight">2w Ago</p>
            </div>

            <div className="mt-3 font-semibold">
              <p>
                Belajar di Renaissance terasa jauh lebih menyenangkan
                dibandingkan platform belajar lain yang pernah aku coba.
                Materinya dijelaskan dengan jelas dan tampilannya juga nyaman
                dilihat, jadi aku bisa belajar lebih lama tanpa merasa bosan
              </p>
              <img src={bintangs} alt="" className="-ml-3" />
            </div>
          </div>

          {/* card 5 */}
          <div className="bg-white w-145 h-70 p-4 rounded-tr-3xl rounded-3xl ">
            <div className="flex gap-5 items-center">
              <img src={mahendra} alt="" className="w-15 h-15 rounded-full" />
              <div>
                <h1 className="text-black font-semibold text-lg">
                  Mahendra Pratama
                </h1>
                <p className="-mt-1 text-base font-">Grade 12</p>
              </div>
              <p className="-mt-4.5 -mr-2.5 font-extralight">3w Ago</p>
            </div>

            <div className="mt-3 font-semibold">
              <p>
                Renaissance membuat belajar terasa lebih terstruktur. Aku bisa
                melihat materi dengan jelas dan belajar secara bertahap tanpa
                merasa kewalahan
              </p>
              <img src={bintangs} alt="" className="-ml-3" />
            </div>
          </div>

          {/* card 6 */}
          <div className="bg-white w-130 h-70 p-4 rounded-tr-3xl rounded-3xl -mr-20">
            <div className="flex gap-5 items-center">
              <img src={arsi} alt="" className="w-15 h-15 rounded-full" />
              <div>
                <h1 className="text-black font-semibold text-lg">
                  Arsi Kealan
                </h1>
                <p className="-mt-1 text-base font-">Grade 7</p>
              </div>
              <p className="-mt-4.5 -mr-2.5 font-extralight">3w Ago</p>
            </div>

            <div className="mt-3 font-semibold">
              <p>
                Awalnya aku mencoba Renaissance karena direkomendasikan oleh
                teman. Setelah mencobanya, aku merasa platform ini benar-benar
                membantu memahami beberapa pelajaran yang sebelumnya terasa sulit 
              </p>
              <img src={bintangs} alt="" className="-ml-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage2;
