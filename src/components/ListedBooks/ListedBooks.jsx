import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../../utility/addToDb';
import Book from '../Book/Book';
import { Helmet } from 'react-helmet-async';

const ListedBooks = () => {
   const [readList, setReadList] = useState([]);

    const allBooks = useLoaderData();

     useEffect(()=>{
        const storedReadList = getStoreReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id))
        console.log(storedReadList,storedReadListInt, allBooks);
        const readBookList = allBooks.filter(book =>storedReadListInt.includes(book.bookId));
        setReadList(readBookList);
    },[]);

  

    return (
        <div className="text-3xl my-8">
<Helmet>
  <title>Boi Poka | List Page</title>
</Helmet>
    <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2 className='text-2xl'>Books I read:{readList.length}</h2>
    {
        readList.map(book=><Book key={book.bookId}book={book}></Book>)
    }
    </TabPanel>
    <TabPanel>
      <h2 className='text-2xl'>My wish list</h2>
    </TabPanel>
  </Tabs>
            
        </div>
    );
};


export default ListedBooks;