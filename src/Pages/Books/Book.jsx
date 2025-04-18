import React from 'react';

const Book = ({singleBook}) => {
    const {bookName, image, yearOfPublishing, publisher, rating } = singleBook
    return (
        <div>
            <div className='mb-10'>
            <div className="card bg-base-100 w-96 h-96 shadow-sm border-1 border-gray-200 p-6">
  <figure className='w-2/3 bg-gray-100 mx-auto p-4'>
    <img className='h-[160px]'
      src={image}
      alt={bookName} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p className='text-sm font-semibold mb-4 text-gray-500'>Publish By : {publisher}</p>
    <div className="card-actions flex justify-between items-center">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">{rating}</div>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Book;