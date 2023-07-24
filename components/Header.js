import React from 'react';
import Btn from './Btn';
import Image from 'next/image'

const Header = () => {
    return (
        <div>  
              <div className=' '>
                <Image
                src="/rectangle.png"
                alt='bg image'
                width={1440}
                height={670}
                layout='responsive'
                objectFit='cover'objectPosition='center'
                className='w-screen h-screen bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,1)] mx-auto absolute'
                // bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,1)]
                

                />
                </div>
                <div className=' text-center sm:min-h-screen -tracking-tighter sm:grid sm:place-content-center z-10 p-8   sm:p-4  text-white relative'>
                <h1 className='mb-1 sm:mb-4 text-3xl sm:text-7xl text-center font-bold'>Let's Help Those Who are
                  <br />
                  More in Need
                </h1>
                <p className='mb-1 text-center sm:mb-4 sm:mx-[400px] text-sm sm:text-xl text-thin'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet atque voluptate fuga voluptas! Amet iste obcaecati itaque nemo dolorum facilis.</p>
                <Btn title="Donate Now"/>

                </div>
              

        </div>
    );
};

export default Header;