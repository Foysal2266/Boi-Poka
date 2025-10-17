import React from 'react';
import bookimg from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className='flex justify-between items-center p-16 bg-pink-50 mt-10 rounded-2xl'>
            <div>
                <h2 className='font-bold text-5xl'>Books to freshen up <br /> your bookshelf</h2>
                <button className='btn btn-primary mt-10'>View The List</button>
            </div>
            <div><img className='w-3/5 ml-45' src={bookimg} alt="" /></div>
        </div>
    );
};

export default Banner;