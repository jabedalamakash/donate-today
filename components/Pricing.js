import React from 'react';
import Btn from './Btn';

const Pricing = () => {
    return (
      <div>
            <section className='mb-20'>
            <div className='text-center container mx-auto'>
            <h1 className='mb-4 text-5xl font-bold'>Donate Today</h1>
            <p className='mb-10 px-10 text-xl w-full sm:w-[50%] mx-auto text-thin'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quia ab  minima eligendi! Ratione laudantium reprehenderit esse. Aperiam, repellat beatae.</p>
            <div className='mx-auto'>
                <div className='flex flex-col  sm:m-0 sm:flex-row justify-center sm:mx-0 mx-20 mb-4'>
                <h3 className='bg-gray-300 mb-2  text-xl font-bold p-5 sm:mr-2 text-gray-800 rounded hover:text-orange-600 hover:border-2 hover:transition hover:border-red-600 '>100TK</h3>
                <h3 className='bg-gray-300 mb-2 text-xl font-bold p-5 sm:mr-2 text-gray-800 rounded hover:transition  hover:text-orange-600  hover:border-2 hover:border-red-600  '>200TK</h3>
                <h3 className='bg-gray-300 mb-2 text-xl font-bold p-5 sm:mr-2 text-gray-800 rounded hover:transition  hover:text-orange-600  hover:border-2 hover:border-red-600  '>500TK</h3>
                <h3 className='bg-gray-300 mb-2 text-xl font-bold p-5 sm:mr-2 text-gray-800 rounded hover:transition  hover:text-orange-600  hover:border-2 hover:border-red-600  '>1000TK</h3>
                <h3 className='bg-gray-300 mb-2 text-xl font-bold p-5 text-gray-800 rounded hover:transition  hover:text-orange-600  hover:border-2 hover:border-red-600  '>5000TK</h3>

                </div>
                
              <form>
                <input type="text" placeholder='Other Amount(Taka)' className='border-b p-2 text-center mb-4' />
                <Btn title="Donate Now"/>


              </form>

            </div>



        </div>

        </section>
        
      </div>
        
        
    );
};

export default Pricing;