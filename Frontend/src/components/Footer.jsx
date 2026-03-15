// import
import logo from "../assets/Logo2.png";
import sosial from "../assets/icon/sosialMedia.png";
import app from "../assets/icon/app.png";

const Footer = () => {
  if (window.innerWidth >= 768) {
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
            <div className="flex flex-col gap-5">
              <h1 class="w-65 font-monstserrat text-[rgba(57,34,28,0.8)] font-semibold">
                Platform pembelajaran interaktif untuk siswa SMP dan SMA yang
                menggabungkan teknologi, kreativitas, dan semangat kebangkitan
                ilmu pengetahuan.
              </h1>
              <img src={sosial} alt="" className="w-fit " />
            </div>

            <div className="flex flex-row lg:ml-0 lg:gap-15 md:gap-6 md:ml-13">
              <div>
                <h1 className="font-monstserrat text-[rgba(57,34,28,0.9)] font-bold">
                  Platform
                </h1>
                <p class="mt-2 font-monstserrat text-[rgba(57,34,28,0.8)] font-semibold">
                  Features
                </p>
                <p className="font-monstserrat text-[rgba(57,34,28,0.8)] font-semibold">
                  AI Learning
                </p>
                <p className="font-monstserrat text-[rgba(57,34,28,0.8)] font-semibold">
                  Interactive
                </p>
                <p className="font-monstserrat text-[rgba(57,34,28,0.8)] font-semibold">
                  Lessons
                </p>
                <p className="font-monstserrat text-[rgba(57,34,28,0.8)] font-semibold">
                  Community
                </p>
                <p className="font-monstserrat text-[rgba(57,34,28,0.8)] font-semibold">
                  Learning Paths
                </p>
              </div>

              <div>
                <h1 className="font-monstserrat text-[rgba(57,34,28,0.9)] font-bold">
                  Company
                </h1>
                <p class="mt-2 font-monstserrat text-[rgba(57,34,28,0.8)] font-semibold">
                  About Us
                </p>
                <p className="font-monstserrat text-[rgba(57,34,28,0.8)] font-semibold">
                  Our Vision
                </p>
                <p className="font-monstserrat text-[rgba(57,34,28,0.8)] font-semibold">
                  Our Mission
                </p>
              </div>

              <div>
                <h1 className="font-monstserrat text-[rgba(57,34,28,0.9)] font-bold">
                  Resources
                </h1>
                <p class="mt-2 font-monstserrat text-[rgba(57,34,28,0.8)] font-semibold">
                  Study Tips
                </p>
                <p className="font-monstserrat text-[rgba(57,34,28,0.8)] font-semibold">
                  Help Center
                </p>
                <p className="font-monstserrat text-[rgba(57,34,28,0.8)] font-semibold">
                  Student Guide
                </p>
              </div>

              <div>
                <h1 className="font-monstserrat text-[rgba(57,34,28,0.9)] font-bold">
                  Contact
                </h1>
                <p class="mt-2 font-monstserrat text-[rgba(57,34,28,0.8)] font-semibold">
                  renaissance.id
                </p>
                <p className="font-monstserrat text-[rgba(57,34,28,0.8)] font-semibold">
                  renai. <br /> ss@gmail.com
                </p>
                <p className="font-monstserrat text-[rgba(57,34,28,0.8)] font-semibold">
                  Jakarta,<br />Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row p-3 pt-7">
          <div className="flex flex-col justify-center font-monstserrat text-[rgba(57,34,28,0.75)] font-bold font-xl">
            <h1 className="text-center">Get App</h1>
            <img src={app} alt="" className="ml-2 -mt-8" />
          </div>

          <div className="flex justify-center md:ml-10 lg:ml-55">
            <p class="text-center font-monstserrat text-[rgba(57,34,28,0.9)] semi-bold">
              © 2026 Renaissance Learning Platform. All Rights Reserved.
            </p>
          </div>
        </div>
      </>
    );
  }
};

export default Footer;
