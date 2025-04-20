import React from 'react';
import { useLoaderData } from 'react-router';
import { useParams,  } from 'react-router';
import { addToStoredDB } from '../../Utilities/addToDB';

const BookDetails = () => {

    const {id} = useParams();
    const bookIdData = parseInt(id);
    const data = useLoaderData();
    
    const singleBookData = data.find(bookData => bookData.bookId === bookIdData);
    const {bookName, image, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = singleBookData;

    const handleMarkAsRead = (id) => {
        addToStoredDB(id)
    }

    return (
        <div className='flex justify-between gap-8 mb-10'>
            <div className='w-[50%] h-[500px] bg-gray-100 flex justify-center items-center rounded-xl'>
            <img className='w-[45%] h-[400px] mx-auto' src={image} alt={bookName} />
            </div>
            <div className='w-[50%]'>
                <h2 className='text-2xl font-bold mb-3'>{bookName}</h2>
                <p className='text-sm font-semibold pb-3 border-b border-gray-300'>BY : {author}</p>
                <p className='py-3 border-b border-gray-300 font-semibold'>{category}</p>
                <p className='pt-3 text-sm font-semibold text-gray-500 mb-2'><span className='font-bold text-black'>Review : </span> {review}</p>
                <div className='flex gap-10 items-center pb-5 border-b border-gray-300'>
                    <span className='font-bold text-sm'>Tag</span>
                    {
                        tags.map(tag => <span className='bg-gray-100 text-green-500 text-sm font-semibold rounded-lg py-2 px-3'>{tag}</span>)
                    }
                </div>
                <div className='flex justify-start items-center gap-10 pt-4 mb-4'>
                    <ul>
                        <li className='text-sm text-gray-500 mb-2'>Number of Pages: </li>
                        <li className='text-sm text-gray-500 mb-2'>Publisher : </li>
                        <li className='text-sm text-gray-500 mb-2'>Year of Publishing : </li>
                        <li className='text-sm text-gray-500 mb-2'>Rating : </li>
                    </ul>
                    <ul>
                        <li className='text-sm text-gray-900 font-semibold mb-2'>{totalPages} </li>
                        <li className='text-sm text-gray-900 font-semibold mb-2'>{publisher} </li>
                        <li className='text-sm text-gray-900 font-semibold mb-2'>{yearOfPublishing} </li>
                        <li className='text-sm text-gray-900 font-semibold mb-2'>{rating}</li>
                    </ul>
                </div>
                <div className='flex gap-5'> 
                    <button onClick={() => {handleMarkAsRead(id)}} className='btn'>Read</button>
                    <button className='btn'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;