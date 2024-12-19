// import React from 'react';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: 'The Joy of Reading Fiction',
      author: 'Jane Doe',
      date: 'August 21, 2024',
      summary: 'Discover how fiction can transport you to new worlds and open your mind to endless possibilities.',
    },
    {
      id: 2,
      title: 'Top 10 Must-Read Books of 2024',
      author: 'John Smith',
      date: 'August 18, 2024',
      summary: 'A curated list of the best books to read this year, spanning various genres and interests.',
    },
    {
      id: 3,
      title: 'How to Build a Reading Habit',
      author: 'Alice Johnson',
      date: 'August 15, 2024',
      summary: 'Tips and tricks on how to make reading a regular part of your daily routine.',
    },
  ];

  return (
    <div className="mt-16"> {/* Adjust the value as needed */}
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Book Readers Blog</h1>
        <div className="space-y-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800">{blog.title}</h2>
              <p className="text-gray-600 mb-4">by {blog.author} | {blog.date}</p>
              <p className="text-gray-700">{blog.summary}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Blog;

