import React from 'react';
import Btn from './Btn';

const Updates = () => {
    return (
        <div className='sm:w-[80vh] mx-auto '>
                    <div className='text-center '>
                        <h1 className=' text-3xl sm:text-5xl mb-5 font-bold'>Get More Updates</h1>
                        <p className='text-xl px-20 font-thin mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestiae quasi iusto possimus? Deserunt id nostrum et aperiam magnam. Ducimus.</p>
                    </div>

            <div className='bg-amber-100 p-20 mb-10 sm:mb-20 flex justify-center'>

                <input type="text" className="px-3 py-2 rounded " placeholder=" Enter your mail"></input>
                <Btn title="Subscribe"/>

            </div>
        </div>
    );
};

export default Updates;