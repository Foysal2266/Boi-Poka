import React, { Suspense, useEffect, useState } from 'react';
import Book from './Book';


const Books = ({data}) => {
    const [allBooks,setAllBooks]=useState([]);

   
    
    // const bookPromise=fetch("./booksData.json").then(res=>res.json())


    return (
        <div>
            <h1 className='text-center text-3xl p-6'>Books</h1>
           <Suspense fallback={<span>Loading.....</span>}>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                 {
                    data.map((singleBook)=> <Book key={singleBook.bookId} singleBook={singleBook} ></Book>)
                }
               </div>
           </Suspense>
        </div>
    );
};

export default Books;