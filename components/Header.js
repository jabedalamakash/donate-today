import React from 'react';
import Btn from './Btn';
import Image from 'next/image'

const Header = () => {
    return (
        <div className=''>  
              <div className='  '>
                <Image
                src="/rectangle.png"
                alt='bg image'
                width={1440}
                height={1000}
                // layout='responsive'
                // objectFit='cover'objectPosition='center'
                className='absolute min-h-max sm:w-screen  sm:h-screen bg-gradient-to-b block  from-[rgba(0,0,0,0.2)] bg-cover bg-center  to-[rgba(0,0,0,1)] mx-auto '
                // bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,1)]
                

                />
                </div>
                <div className=' relative text-center sm:min-h-screen -tracking-tighter sm:grid place-content-center z-10  mx-auto sm:py-20 sm:px-20 sm:p-4  text-white '>
                <h1 className='mb-1 sm:mb-4 sm:px-20 sm:mx-[320px] text-2xl sm:text-7xl text-center  font-bold'>Let's Help Those Who are
                  
                  More in Need
                </h1>
                <p className=' sm:block  sm:px-20 text-center sm:mb-4 sm:mx-[330px] text-sm sm:text-xl sm:text-thin'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet atque voluptate fuga voluptas! Amet iste obcaecati itaque nemo dolorum facilis.</p>
                <Btn title="Donate Now"/>

                </div>
              

        </div>
    );
};

export default Header;