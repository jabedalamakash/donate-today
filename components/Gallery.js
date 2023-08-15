import React from 'react';
import Btn from './Btn';
import Image from 'next/image';

const Gallery = () => {
    return (
        <div>
                     <div className='w-full px-10 sm:px-0 mb-20 mx-auto sm:w-[80%]'>


                    <div className='flex flex-col mb-20  justify-center sm:flex-row items-center'>


                        <div className='sm:w-1/2 w-full mb-10 sm:mb-0 text-center sm:text-left sm:mr-[100px]'>
                            <h1 className='text-5xl mb-5 tracking-tighter font-bold'>Their lives depend on your donation.</h1>
                            <p className='text-xl mb-2 sm:mb-5 sm:p-0 font-thin '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis tenetur deserunt blanditiis ea atque hic maiores quos. Voluptatum, quod vitae?</p>
                            <br/>
                            <br/>
                            
                            <p className='text-xl mb-5 font-thin' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis illo velit dicta qui culpa architecto?</p>
                            
                            <Btn title="How to Contribute?"/>

                        </div>


                        <div className='w-full sm:w-1/2 mx-auto '>
                            <Image
                            src="/donation10.jpg"
                            width={200}
                            height={200}
                            alt="donation"
                            layout="responsive"
                            className='rounded-md  '

                            />

                        </div>


                    </div>


                    <div className='flex flex-col sm:flex-row sm:items-center'>

                    <div className='w-full sm:w-1/2'>
                            <Image
                            src="/donation0.jpg"
                            width={200}
                            height={200}
                            alt="donation"
                            layout="responsive"
                            className='rounded-md'

                            />

                        </div>
                        
                        <div className='w-full sm:w-1/2 mt-10 sm:mt-0 text-center sm:text-left   sm:ml-[100px]'>
                            <h1 className='text-5xl mb-5 -tracking-tighter font-bold'>They need us to survive.</h1>
                            <p className='text-xl mb-2 sm:mb-5 font-thin '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis tenetur deserunt blanditiis ea atque hic maiores quos. Voluptatum, quod vitae?</p>
                            <br/>
                            <br/>
                            
                            <p className='text-xl mb-5 font-thin' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis illo velit dicta qui culpa architecto?</p>
                            
                            <Btn title="How to Contribute?"/>

                        </div>
                    


                    </div>

        </div>
        </div>
       
    );
};

export default Gallery;