// import
import logo from "../assets/Logo2.png";
import sosial from "../assets/icon/sosialMedia.png";
import app from "../assets/icon/app.png";

const FooterHp = () => {
  if (window.innerWidth < 640) {
    return (
      <>
        <div className="p-10 border-b-2 border-[#9B7A5B] border-solid">
          <div className="flex flex-row gap-2">
            <img src={logo} alt="" />
            <h1 className="text-bistre font-medium font-poppins text-2xl">
              Renaissance
            </h1>
          </div>

          <div className="flex flex-row justify-between mt-6">
            <div className="flex flex-col justify-center gap-5">
              <h1 class="w-80 font-monstserrat text-center -ml-3 text-[rgba(57,34,28,0.8)] font-semibold">
                Platform pembelajaran interaktif untuk siswa SMP dan SMA yang
                menggabungkan teknologi, kreativitas, dan semangat kebangkitan
                ilmu pengetahuan.
              </h1>
              <img src={sosial} alt="" className="w-fit ml-9" />
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-center p-3 pt-7">
          <div className="flex flex-col justify-center font-monstserrat text-[rgba(57,34,28,0.75)] font-bold font-xl">
            <h1 className="text-center">Get App</h1>
            <img src={app} alt="" className="-mt-8" />
          </div>

          <div className="flex justify-center">
            <p class="text-center font-monstserrat text-[rgba(57,34,28,0.9)] semi-bold">
              © 2026 Renaissance Learning Platform. All Rights Reserved.
            </p>
          </div>
        </div>
      </>
    );
  }
};

export default FooterHp;
