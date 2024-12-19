// import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">About Book Inventory</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Welcome to our Book Inventory application! Our mission is to help you easily manage and keep track of your book collection. Whether you are a casual reader, a librarian, or a book enthusiast, our application provides the tools you need to organize your books efficiently.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Our platform allows you to upload new books, categorize them by genre, and keep detailed descriptions, including images and downloadable PDF links. You can also search for books by category and update or remove them as your collection evolves.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          We are committed to making book management as simple and enjoyable as possible, and we continuously work on improving our application to meet your needs. Thank you for choosing Book Inventory to manage your collection!
        </p>
        <p className="text-gray-700 text-lg leading-relaxed text-center">
          Happy Reading!
        </p>
      </div>
    </div>
  );
}

export default About;

