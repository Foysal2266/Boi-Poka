import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDb';


const ReadList = () => {

    const ReadList=()=>{
        const [readList,setReadList]=useState([])
        const data=useLoaderData();
        console.log(data)

        useEffect(()=>{
            const storedBookData=getStoredBook();
           const convertedStoredBooks=storedBookData.map(id=>parseInt(id) )
           const myReadList=data.filter(book=>convertedStoredBooks.includes(book.bookId));
              setReadList(myReadList)
        },[])
    }
    return (
        <div>
           <Tabs>
    <TabList>
      <Tab>Read Booklist</Tab>
      <Tab>Wishlist</Tab>
    </TabList>

    <TabPanel>
      <h2>Book I read </h2>
    </TabPanel>
    <TabPanel>
      <h2>WishList</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;