import React from 'react';
import bookImage from '../../assets/books.jpg';
const Banner = () => {
    return (
    <div>
    <div className=" bg-base-200 min-h-56 p-20 mb-10">
  <div className=" flex lg:flex-row-reverse justify-around items-center">
    <img
      src={bookImage}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold mb-10">Books to freshen up <br /> your bookshelf</h1>
      
      <button className="btn btn-primary">View The List</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;