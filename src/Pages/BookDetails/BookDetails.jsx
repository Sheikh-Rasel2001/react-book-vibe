import React from 'react';
import { useLoaderData } from 'react-router';
import { useParams,  } from 'react-router';

const BookDetails = () => {

    const {id} = useParams();
    const bookIdData = parseInt(id);
    const data = useLoaderData();
    
    const singleBookData = data.find(bookData => bookData.bookId === bookIdData);
    const {bookName, image, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = singleBookData

    return (
        <div className='flex justify-between gap-6 mb-10'>
            <div className='w-[50%] h-[500px] bg-gray-100 flex justify-center items-center rounded-xl'>
            <img className='w-[45%] h-[400px] mx-auto' src={image} alt={bookName} />
            </div>
            <div className='w-[50%]'>
                <h2>{bookName}</h2>
                <p>BY : {author}</p>
                <p>{category}</p>
                <p><span>Review : </span> {review}</p>
                <div className='flex gap-10 items-center'>
                    <span>Tags</span>
                    {
                        tags.map(tag => <span className='bg-gray-100 text-green-500 text-sm font-semibold rounded-lg py-2 px-3'>{tag}</span>)
                    }
                </div>
                <div className='flex justify-start items-center gap-10'>
                    <ul>
                        <li>Number of Pages: </li>
                        <li>Publisher : </li>
                        <li>Year of Publishing : </li>
                        <li>Rating : </li>
                    </ul>
                    <ul>
                        <li>{totalPages} </li>
                        <li>{publisher} </li>
                        <li>{yearOfPublishing} </li>
                        <li>{rating}</li>
                    </ul>
                </div>
                <div>
                    <button className='btn'>Read</button>
                    <button className='btn'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;