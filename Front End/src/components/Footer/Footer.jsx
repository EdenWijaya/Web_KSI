import React from 'react'
import { MdMapsHomeWork } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
                {/* first section */}
                <div className='space-y-4 max-w-[300px] '>
                    
                    <h1 className='text-xl font-bold'>
                        <span className='text-secondary2'>Eco</span> Banjar
                    </h1>
                    <div className='flex items-center space-x-2'>
                        <MdMapsHomeWork className='text-3xl text-secondary2 mr-2'/>
                        <a href='#'>Jati Agung, Lampung Selatan, Lampung, Indonesia</a>
                    </div>
                </div>

                {/* second section */}
                {/* third section */}
            </div>
        </div>
    </footer>
  )
}

export default Footer