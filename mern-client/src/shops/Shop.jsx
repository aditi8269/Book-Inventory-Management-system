// import React from 'react'

import { useState  , useEffect} from "react";
import { Card } from "flowbite-react";

const Shop = () => {
  const [books , setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-Books')
       .then(res => res.json()).then(data => setBooks(data))
    } , [])
  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All Books are Here</h2>
      <div  className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1  ">
          {
            books.map((book, index) => (
              <Card key={index}>
                <img className="h-96 " src={book.imageURL} alt={book.title} />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4">
                  {book.bookTitle}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  here are the biggest enterprise technology acquisitions 2024 so far, in reverse chronological order
                </p>
                <button className="bg-blue-700 font-semibold text-white py-2 rounded" > Shop Now </button>
                
              </Card>
            ))
        }
      </div>
    </div>
  )
}

export default Shop
