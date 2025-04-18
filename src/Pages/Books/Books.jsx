import React from 'react';
import Book from './book';

const Books = ({data}) => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center text-gray-800 mb-8'>Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    data.map((singleBook)=> <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;