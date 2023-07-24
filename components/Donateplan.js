import Image from 'next/image';
import React from 'react';

const Donateplan = () => {
    return (
        <div className='container mx-auto mt-10 p-10 sm:p-20'>
                    <h2 className='text-center font-bold text-5xl mb-5'>Our Donate Plan</h2>
                    <p className='text-center px-5 sm:mx-[300px] text-xl text-thin mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, eaque. Saepe ad doloremque accusamus voluptas omnis dolore distinctio earum temporibus.</p>
                    <div className='flex mb-2 sm:mb-0 flex-col sm:flex-row'>
                        <div className=' p-10 bg-sky-200 rounded'>
                            <Image 
                            src="/food.png"
                            width={50}
                            height={50}
                            alt="icon"
                            
                            className="mb-5 w-auto h-auto"/>
                            <h6 className='mb-5 font-bold text-3xl'>Food For a Family</h6>
                            <p className='font-thin text-xl' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aspernatur repudiandae quasi tenetur laudantium voluptas aliquid dolorem voluptates, molestiae deserunt.</p>
                        </div>
                            <div className='sm:mr-10 mb-5 mt-5 sm:mb-0  sm:mt-0 sm:ml-10 p-10 bg-red-200 rounded'>
                            <Image 
                            src="/shelter.png"
                            width={50}
                            height={50}
                            alt="icon"
                        
                            className="mb-5"/>
                            <h6 className='mb-5 font-bold text-3xl'>Shelter For a Family</h6>
                            <p className='font-thin text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aspernatur repudiandae quasi tenetur laudantium voluptas aliquid dolorem voluptates, molestiae deserunt.</p>
                            </div>
                            <div className='p-10  bg-orange-200 rounded'>
                            <Image 
                            src="/edu.png"
                            width={50}
                            height={50}
                            alt="icon"
                        
                            className="mb-0 sm:mb-5"/>
                            <h6 className='mb-5 font-bold text-3xl'>Education For a Family</h6>
                            <p className='font-thin text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aspernatur repudiandae quasi tenetur laudantium voluptas aliquid dolorem voluptates, molestiae deserunt.</p>
                             </div>


                    </div>


        </div>
    );
};

export default Donateplan;