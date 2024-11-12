import React from 'react'
import { MdMapsHomeWork } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className='py-24'>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
                {/* first section */}
                <div className='grid grid-cols-2 gap-10 '>
                    <div className='space-y-4'>
                        <h1 className='text-2xl font-bold'><span className='text-secondary2'>Eco</span>Banjar</h1>
                        <div>
                            
                        </div>
                    </div>
                </div>

                {/* second section */}
                <div className='grid grid-cols-2 gap-10 '>
                    <div className='space-y-4'>
                        <h1 className='text-2xl font-bold'>Other Website</h1>
                        <div>
                            <ul>
                                <li className='flex items-center space-x-2'> <TbWorldWww className='text-2xl text-secondary2 mr-2'/> Web Desa</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* third section */}
            </div>
        </div>
    </footer>
  )
}

export default Footer