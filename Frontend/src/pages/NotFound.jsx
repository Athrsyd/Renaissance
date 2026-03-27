import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-beige px-4">
            <div className="text-center">
                <div className="text-[5rem] md:text-[7rem] font-bold text-chamoisee mb-2 select-none">404</div>
                <h1 className="text-2xl md:text-3xl font-semibold text-bistre mb-3 font-poppins">Halaman Tidak Ditemukan</h1>
                <p className="text-bistre/80 text-base md:text-lg mb-6 font-monstserrat">
                    Wah, sepertinya kamu nyasar ke halaman yang tidak tersedia.<br />
                    Yuk, kembali ke beranda dan lanjutkan petualangan belajarmu!
                </p>
                <Link to="/" className="inline-block bg-chamoisee hover:bg-bistre text-beige font-bold py-2 px-6 rounded-full transition-colors duration-300 font-poppins shadow-md">
                    Kembali ke Beranda
                </Link>
            </div>
        </div>
    );
};

export default NotFound;