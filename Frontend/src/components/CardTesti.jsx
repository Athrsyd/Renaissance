// import
import bintangs from "../assets/icon/bintangs.png";

// assets
import nares from "../assets/displayProfile/nares.jpg";
import william from "../assets/displayProfile/2_william.jpg";
import cinta from "../assets/displayProfile/3_cinta.jpg";
import genta from "../assets/displayProfile/4_genta.jpg";
import arsi from "../assets/displayProfile/5_arsi.jpg";
import mahendra from "../assets/displayProfile/6_mahendra.jpg";
import keisha from "../assets/displayProfile/7.jpg";
import dimas from "../assets/displayProfile/8.jpg";
import alya from "../assets/displayProfile/9.jpg";
import raka from "../assets/displayProfile/10.jpg";
import kayla from "../assets/displayProfile/11.jpg";
import farrel from "../assets/displayProfile/12.jpg";

const data1 = [
  {
    id: "1",
    img: nares,
    nama: "Naresha Letrakusuma",
    grade: "Grade 12",
    time: "3w ago",
    comment:
      "Belajar di Renaissance terasa jauh lebih menyenangkan dibandingkan platform belajar lain yang pernah aku coba.",
    icon: bintangs,
  },
  {
    id: "2",
    img: william,
    nama: "William Jakraputra",
    grade: "Grade 10",
    time: "3w ago",
    comment:
      "Fitur AI di Renaissance sangat membantu ketika aku kesulitan memahami soal. Penjelasannya cepat dan bahasanya mudah dimengerti, jadi aku bisa langsung paham.",
    icon: bintangs,
  },
  {
    id: "3",
    img: cinta,
    nama: "Cinta Reynasya",
    grade: "Grade 12",
    time: "1w ago",
    comment:
      "Yang paling aku suka adalah fitur komunitasnya. Aku bisa berdiskusi dengan siswa lain, bertanya kalau ada materi yang sulit, dan kadang juga membantu menjelaskan ke teman lain",
    icon: bintangs,
  },
  {
    id: "4",
    img: genta,
    nama: " Genta Narendra",
    grade: "Grade 9",
    time: "2w ago",
    comment:
      "Pembelajarannya interaktif dan tidak membosankan. Ada banyak cara untuk memahami materi, jadi rasanya seperti belajar sambil eksplorasi, bukan hanya membaca teks saja",
    icon: bintangs,
  },
  {
    id: "5",
    img: mahendra,
    nama: "Mahendra Pratama",
    grade: "Grade 12",
    time: "3w ago",
    comment:
      "Renaissance membuat belajar terasa lebih terstruktur. Aku bisa melihat materi dengan jelas dan belajar secara bertahap tanpa merasa kewalahan",
    icon: bintangs,
  },
  {
    id: "6",
    img: arsi,
    nama: "Arsi Kealan",
    grade: "Grade 7",
    time: "1w ago",
    comment:
      "Awalnya aku mencoba Renaissance karena direkomendasikan oleh teman. Setelah mencobanya, aku merasa platform ini benar-benar membantu memahami beberapa pelajaran yang sebelumnya terasa sulit",
    icon: bintangs,
  },
];

const data2 = [
  {
    id: "1",
    img: keisha,
    nama: "Keisha Adryantha",
    grade: "Grade 11",
    time: "1w ago",
    comment:
      "  Renaissance membantu aku memahami pelajaran dengan cara yang lebih sederhana. Penjelasan materinya jelas dan fitur interaktifnya membuat belajar terasa lebih menarik dibandingkan hanya membaca buku pelajaran.",
    icon: bintangs,
  },
  {
    id: "2",
    img: dimas,
    nama: "Dimas Pratama",
    grade: "Grade 8",
    time: "2w ago",
    comment:
      "latform ini sangat membantu saat aku sedang belajar sendiri di rumah. Dengan adanya AI dan latihan interaktif, aku bisa memahami materi yang sebelumnya terasa cukup sulit.",
    icon: bintangs,
  },
  {
    id: "3",
    img: alya,
    nama: "Alya Rahmawati",
    grade: "Grade 10",
    time: "1w ago",
    comment:
      "Yang paling aku suka adalah fitur komunitasnya. Aku bisa berdiskusi dengan siswa lain, bertanya kalau ada materi yang sulit, dan kadang juga membantu menjelaskan ke teman lain",
    icon: bintangs,
  },
  {
    id: "4",
    img: raka,
    nama: "Raka Mahardika",
    grade: "Grade 9",
    time: "6w ago",
    comment:
      " Menurutku Renaissance membuat proses belajar jadi lebih menyenangkan. Selain materinya mudah dipahami, aku juga bisa berdiskusi dengan siswa lain di komunitasnya.",
    icon: bintangs,
  },
  {
    id: "5",
    img: kayla,
    nama: "Kayla Anindita",
    grade: "Grade 7",
    time: "3w ago",
    comment:
      "Sebagai siswa yang baru masuk SMP, Renaissance sangat membantu aku menyesuaikan diri dengan pelajaran. Penjelasannya sederhana dan membuatku lebih percaya diri.",
    icon: bintangs,
  },
  {
    id: "6",
    img: farrel,
    nama: "Farrel Wijaya",
    grade: "Grade 11",
    time: "1w ago",
    comment:
      "  Fitur AI di Renaissance sangat membantu ketika aku ingin memahami konsep dengan lebih cepat. Penjelasannya terasa seperti mendapat bantuan belajar secara langsung.",
    icon: bintangs,
  },
];

const Card = ({ item }) => {
  return (
    <>
      <div className="bg-white w-140 h-70 p-4 rounded-3xl">
        <div className="flex gap-5 items-center">
          <img src={item.img} alt="" className="w-15 h-15 rounded-full" />
          <div>
            <h1 className="text-black font-semibold text-lg">{item.nama}</h1>
            <p className="-mt-1 text-base font-">{item.grade}</p>
          </div>
          <p className="-mt-4.5 -mr-2.5 font-extralight">{item.time}</p>
        </div>

        <div className="mt-3 font-semibold">
          <p>{item.comment}</p>
          <div>
             <img src={bintangs} alt="" className="-ml-3 mt-auto flex gap-1 pt-4" />
          </div>
         
        </div>
      </div>
    </>
  );
};

const ContainerUp = () => {
  return (
    <>
      <div className="font-poppins mt-15 flex gap-7 overflow-x-hidden w-max animate-slide">
        {data1.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

const ContainerDown = () => {
  return (
    <>
      <div className="font-poppins mt-15 flex gap-7 overflow-x-hidden w-max animate-slide-reverse">
        {data2.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

const Content = () => {
  return (
    <>
      <div id="reviews"className="h-full bg-bistre">
        <div className="text-5xl pt-23 flex justify-center font-poppins bg-linear-to-r from-[#9B7A5B] to-[#dcceb9] text-transparent bg-clip-text font-semibold">
          <h1>What Students Say</h1>
        </div>

        <ContainerUp />
        <ContainerDown />

      </div>
    </>
  );
};

export default Content
