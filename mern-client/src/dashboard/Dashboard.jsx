// import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col">
      <h1 className="text-4xl font-bold mb-3 p-8">Dashboard</h1>
      <div className="flex-grow p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Total Books */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Total Books</h2>
            <p className="text-4xl mt-4">150</p>
          </div>

          {/* Recently Added Books */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Recently Added Books</h2>
            <ul className="mt-4">
              <li className="mb-2">Book Title 1</li>
              <li className="mb-2">Book Title 2</li>
              <li className="mb-2">Book Title 3</li>
            </ul>
          </div>

          {/* Categories */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Categories</h2>
            <ul className="mt-4">
              <li className="mb-2">Fiction</li>
              <li className="mb-2">Non-Fiction</li>
              <li className="mb-2">Science Fiction</li>
            </ul>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>No recent activity.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


