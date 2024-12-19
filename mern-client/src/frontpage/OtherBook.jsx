// import React from 'react'
import { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const OtherBook = () => {
    const [books , setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-Books')
       .then(res => res.json()).then(data => setBooks(data.splice(5,12)))
    } , [])
  return (
    <div>
      <BookCards books = {books} headline="Other Books"/>
    </div>
  )
}

export default OtherBook;
