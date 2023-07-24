import React from 'react';
import Btn from './Btn';
import Image from 'next/image';

const Gallery = () => {
    return (
        <div>
                     <div className='container mx-auto p-10'>


                    <div className='flex flex-col mx-auto p-10 sm:p-20 justify-center sm:flex-row items-center'>
                        <div className='sm:w-1/2 mb-5 sm:mb-0 sm:mr-[300px]'>
                            <h1 className='text-5xl mb-5 tracking-tighter font-bold'>Their lives depend on your donation.</h1>
                            <p className='text-xl mb-5 sm:p-0 font-thin '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis tenetur deserunt blanditiis ea atque hic maiores quos. Voluptatum, quod vitae?</p>
                            <br/>
                            <br/>
                            
                            <p className='text-xl mb-5 font-thin' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis illo velit dicta qui culpa architecto?</p>
                            
                            <Btn title="How to Contribute?"/>

                        </div>


                        <div className='sm:w-1/2 mx-auto '>
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

                    <div className='flex flex-col p-10  sm:p-20 sm:flex-row sm:items-center'>

                    <div className='sm:w-1/2'>
                            <Image
                            src="/donation0.jpg"
                            width={200}
                            height={200}
                            alt="donation"
                            layout="responsive"
                            className='rounded-md'

                            />

                        </div>
                        
                        <div className='sm:w-1/2 mt-5  sm:ml-[300px]'>
                            <h1 className='text-5xl mb-5 -tracking-tighter font-bold'>They need us to survive.</h1>
                            <p className='text-xl mb-5 font-thin '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis tenetur deserunt blanditiis ea atque hic maiores quos. Voluptatum, quod vitae?</p>
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