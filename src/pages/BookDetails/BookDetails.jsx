import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDb';

const BookDetails = () => {
    const {id}=useParams();
    const bookId=parseInt(id);
    const data=useLoaderData();
    const singleBook=data.find(book=>book.bookId===bookId);
    const {bookName,image}=singleBook;

     const handleMarkAsRead=id=>{

        addToStoredDB(id)

     }


    return (
        <div className='w-2/3 mx-auto'>
            <img className='w-48' src={image} alt="" />
            <p>{bookName}</p>

            <button onClick={()=>handleMarkAsRead(id)} className="btn btn-accent mr-2">Mark to Read</button>
<button className="btn btn-info">Add to WishList</button>
        </div>
    );
};

export default BookDetails;