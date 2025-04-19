import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({singleBook}) => {
    const {bookName, image, yearOfPublishing, publisher, rating, category, tags,  bookId} = singleBook
    return (
        <div>
           <Link to={`/bookDetails/${bookId}`}>
           <div className='mb-10'>
            <div className="card bg-base-100 w-96 h-[400px] shadow-sm border-1 border-gray-200 p-6">
  <figure className='w-2/3 bg-gray-100 mx-auto p-4 rounded-lg'>
    <img className='h-[180px] p-10'
      src={image}
      alt={bookName} />
  </figure>
  <div className="card-body">
        <div className='flex gap-10 '>
            {
                tags.map(tag => <span key={tag.bookId} className='bg-gray-100 text-green-500 text-sm font-semibold rounded-lg py-2 px-3'>{tag}</span>)
            }
        </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p className='text-sm font-semibold mb-4 text-gray-500 border-b border-dashed border-gray-300 pb-5'>Publish By : {publisher}</p>
    <div className="card-actions flex justify-between items-center ">
      <div className="text-sm font-semibold hover">{category}</div>
      <div className="text-sm font-semibold flex gap-1 justify-center items-center">{rating} <FaStarHalfAlt /></div>
    </div>
  </div>
</div>
            </div>
           </Link>
        </div>
    );
};

export default Book;