import React from 'react';
import Btn from './Btn';
import Image from 'next/image'

const Header = () => {
    return (
        <div className='  mb-40'>  
              <div className=' mx-auto'>
                <Image
                src="/rectangle.png"
                alt='bg image'
                width={1280}
                height={600}
                // layout='responsive'
                // objectFit='cover'objectPosition='center'
                className='absolute w-full h-[50%] object-center object-cover opacity-80 mx-auto '
                // bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,1)]
                

                />
                </div>
                <div className=' text-center py-48 relative z-10 w-full mx-auto text-white '>
                <h1 className=' mb-10 w-full  sm:w-[50%] text-2xl sm:text-7xl text-center mx-auto font-bold'>Let's Help Those Who are More in Need
                </h1>
                <p className=' mb-10  text-center mx-auto  sm:w-[60%] text-xl sm:text-2xl sm:text-thin'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet atque voluptate fuga voluptas! Amet iste obcaecati itaque nemo dolorum facilis.</p>
                <Btn title="Donate Now"/>

                </div>
              

        </div>
    );
};

export default Header;