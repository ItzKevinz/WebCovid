import React from 'react';
import FooterLogo from "../../assets/logo.png";
import Banner from "../../assets/Footerfoto/footer-pattern.jpg";
import {
    FaFacebook,
    FaInstagram,
    FaLocationArrow
} from "react-icons/fa";

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const FooterLinks = [
    { title: "Home", link: "/#" },
    { title: "About", link: "/#about" },
    { title: "Contact", link: "/#contact" },
    { title: "Blog", link: "/#blog" },
];

const Footer = () => {
    return (
        <div style={BannerImg} className='text-white mb-20'>
            <div className='container'>
                <div className='grid md:grid-cols-3 gap-10 pb-44 pt-5'>

                    {/* Column 1: Company details */}
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-3xl text-xl font-bold flex items-center gap-3 mb-3'>
                            <img src={FooterLogo} alt="" className='max-w-[50px]' />
                            Kesehatan
                        </h1>
                        <p>
                            Website ini menyediakan berbagai informasi mengenai Virus Corona.
                            Jika butuh informasi lebih lanjut, bisa contact yang ada disini.
                        </p>
                    </div>

                    {/* Column 2: Footer Links */}
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold mb-3'>Important Links</h1>
                        <ul className='flex flex-col gap-3'>
                            {FooterLinks.map((link) => (
                                <li
                                    key={link.title}
                                    className='cursor-pointer hover:text-orange-400 transition-all duration-300'
                                >
                                    <a href={link.link}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                  
                    <div className='py-8 px-4'>
                        {/* Social Icons */}
                        <div className='flex items-center gap-3 mb-4'>
                            <a href="https://www.instagram.com/userifana/">
                                <FaInstagram className='text-2xl hover:text-orange-400' />
                            </a>
                            <a href="">
                                <FaFacebook className='text-2xl hover:text-orange-400' />
                            </a>
                            <a href="">
                                <FaInstagram className='text-2xl hover:text-orange-400' />
                            </a>
                        </div>

                        {/* Location & Kontak */}
                        <div className='text-sm text-gray-300 flex flex-col gap-2'>
                            <div className='flex items-center gap-2'>
                                <FaLocationArrow />
                                <a
                                    href="https://www.google.com/maps/place/Bandung,+Kota+Bandung,+Jawa+Barat"
                                    target="_blank" rel="noopener noreferrer"
                                    className='hover:text-orange-400'
                                >
                                    Bandung, Indonesia
                                </a>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FaInstagram />
                                <a href="https://www.instagram.com/userifana/" className='hover:text-orange-400'>
                                    @userifana
                                </a>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FaFacebook />
                                <a href="" className='hover:text-orange-400'>
                                    @Adli
                                </a>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FaInstagram />
                                <a href="" className='hover:text-orange-400'>
                                    @Fadli P
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;
