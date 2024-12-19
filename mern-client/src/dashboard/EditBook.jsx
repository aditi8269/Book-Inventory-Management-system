// import React from 'react'

import { useLoaderData, useParams } from "react-router-dom"

import { Label, TextInput , Textarea , Button} from "flowbite-react";
import { useState } from "react";

const EditBook = () => {

  const {id} = useParams();
  const { bookTitle , authorName, bookDescription, category, imageURL, bookPdfUrl } = useLoaderData();

    const bookCategories = [
    'Fiction',
    'Non-Fiction',
    'Mystery',
    'Science Fiction',
    'Fantasy',
    'Biography',
    'History',
    'Children\'s',
    'Young Adult',
    'Self-Help',
    'Romance',
    'Thriller',
    'Horror',
    'Poetry',
    'Classic',
    'Adventure',
    'Cookbooks',
    'Graphic Novels',
    'Travel',
    'Science',
    'Philosophy',
    'Religion',
    'True Crime',
    'Health & Wellness'
  ];

  const [selectedBookCategory , setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChange = (event) => { setSelectedBookCategory(event.target.value); }
  const handleUpdate = (event) => {   
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const bookDescription = form.bookDescription.value;
    const category = form.categoryName.value;
    const imageURL = form.imageURL.value;
    const bookPdfUrl = form.bookPdfUrl.value;

    const updateBookObject = { bookTitle , authorName, bookDescription, category, imageURL, bookPdfUrl };
    
    // console.log(bookObject);

    // update data to ur databases
    fetch(`http://localhost:5000/book/${id}` , {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateBookObject),
    })
    .then((res) => res.json()).then(data => {
      alert("Updated book successfully!!");
    })
  }
  


  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold"> Update the Book Data </h2>
      <form onSubmit={handleUpdate}  className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* 1 row */}
      <div className="flex gap-8">
      <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label 
          htmlFor="bookTitle" 
          value="Book Title" />
        </div>
        <TextInput 
        id="bookTitle" 
        name="bookTitle" 
        type="text" 
        placeholder="Book Name" 
        defaultValue={bookTitle}
        required shadow />
      </div>
      {/* author name */}
      <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label 
          htmlFor="authorName" 
          value="Author name" />
        </div>
        <TextInput 
        id="authorName" 
        name="authorName" 
        type="text" 
        placeholder="author Name" 
        defaultValue={authorName}
        required shadow />
      </div>
      
      </div>

      {/* 2 row */}
      <div className="flex gap-8">
      <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label 
          htmlFor="imageURL" 
          value="Book image" />
        </div>
        <TextInput 
        id="imageURL" 
        name="imageURL" 
        type="url" 
        placeholder="Book Image" 
        defaultValue={imageURL}
        required shadow />
      </div>
      {/* author name */}
      <div className="lg:w-1/2">
      <div className="mb-2 block">
          <Label 
          htmlFor="bookCategory" 
          value="Book Category" />
        <select 
        id="inputState" 
        name="categoryName" 
        className="w-full rounded " 
        value={selectedBookCategory}
           onChange={ handleChange} >
          {
            bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
          }
        </select>
        </div>
      </div>
      
      </div>
      
      {/* description */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description " />
        </div>
        <Textarea 
        id="bookDescription"  
        name="bookDescription"  
        type="text" 
        placeholder="Description"
        defaultValue={bookDescription} 
        className="w-full" 
        required rows={6} />

      </div>

      {/* book pdf link */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfUrl" value="Provide book PDF link" />
        </div>
        <TextInput 
        id="bookPdfUrl" 
        name="bookPdfUrl" 
        type="url" 
        placeholder="PDF link" 
        defaultValue={bookPdfUrl}
        required shadow />
      </div>

      <div><Button type="submit">Update A Book</Button></div>

    </form>
      
    </div>
  )
}

export default EditBook
