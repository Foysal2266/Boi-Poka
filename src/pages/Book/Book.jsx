import React, { use } from 'react';
import { FaRegStarHalfStroke } from "react-icons/fa6";

const Book = ({singleBook}) => {

    // 
    const {bookName,author,image,rating,category}=singleBook;
    return (
        <div className="card bg-base-100 w-96 shadow-sm border p-5">
  <figure className='p-4 bg-gray-200 w-2/3 mx-auto'>
    <img
    className='h-[200px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating} <FaRegStarHalfStroke /></div>
    </div>
  </div>
</div>
    );
};

export default Book;