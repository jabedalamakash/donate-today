import React from 'react';
import Btn from './Btn';
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
    weight:["400"],
    fontSize:"72px",
    fontWeight:"bold",
    color:" rgb(220 38 38 )",
    subsets: ['latin'] })

const Footer = () => {
    return (
      <div className='bg-black text-center p-10'>

            <div className=' text-red-600 text-3xl mb-5 sm:text-5xl  '>
            <h1 className={pacifico.className} > Be Humble</h1>
             </div>

             <div>
            <p className='text-white font-thin  text-xl'>I'm gonna do it.</p>
            </div>
         
           

      
        </div>
    );
};

export default Footer;
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
