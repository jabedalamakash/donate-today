import React from 'react';
import Btn from './Btn';

const Updates = () => {
    return (
        <div className='w-full sm:w-[40%] mb-20 px-10 sm:px-0 mx-auto '>
            
                    <div className='text-center '>
                        <h1 className=' text-5xl mb-5 font-bold'>Get More Updates</h1>
                        <p className='text-xl font-thin mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestiae quasi iusto possimus? Deserunt id nostrum et aperiam magnam. Ducimus.</p>
                    </div>

            <div className='bg-amber-100 p-20 mb-10 text-center sm:text-left sm:mb-20 flex flex-col sm:flex-row justify-center'>

                <input type="text" className="px-3 py-2 mb-4 sm:mb-0 rounded " placeholder=" Enter your mail"></input>
                <Btn title="Subscribe"/>

            </div>
        </div>
    );
};

export default Updates;