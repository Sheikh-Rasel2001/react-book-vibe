import React from 'react';
import { useParams, useRouteLoaderData } from 'react-router';

const BookDetails = () => {

    const {id} = useParams();
    const data = useRouteLoaderData();
    const bookId = parseInt(id);
    const singleBookData = data.find(bookData => bookData.bookId === bookId);
    const {bookName} = singleBookData

    return (
        <div>
            <h1>Book details</h1>
        </div>
    );
};

export default BookDetails;