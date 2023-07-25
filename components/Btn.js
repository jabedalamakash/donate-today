import React from 'react';

const Btn = (props) => {
    return (
        <div>
            <button  className='bg-red-600 px-3 py-2 hover:animate-bounce transition font-bold text-sm  sm:text-xl rounded text-white'>{props.title}</button>
        </div>
    );
};

export default Btn;