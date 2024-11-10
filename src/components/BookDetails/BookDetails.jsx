import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoreReadList } from '../../utility/addToDb';
import { Helmet } from 'react-helmet-async';

const BookDetails = () => {

    const {bookId} = useParams();
   

    const data = useLoaderData();

    const id = parseInt(bookId);
    
    const book = data.find(book => book.bookId === id)
   
    const {bookId: currentBookId, image} = book;
    
   const handleMarkAsRead = (id) =>{

    addToStoreReadList(id);
   }

    return (
        <div className='my-12'>
            <Helmet>
            <title>Book Details | {bookId}</title>
            </Helmet>
            <h2>book details:{bookId}</h2>
        <img className='w-36' src={image} alt="" />
       
       <br/>
       <button onClick={() =>handleMarkAsRead(bookId)} className="btn btn-outline mr-4 btn-accent">Mark as Read</button>
       <button className="btn  btn-accent">Add to WishList</button>
        </div>
    );
};

export default BookDetails;