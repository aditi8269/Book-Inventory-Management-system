// import React from 'react'
import BannerCards from "../frontpage/BannerCards"

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
            {/* {left side} */}
            <div className="md:w-1/2 space-y-8 h-full">
                <h1 className="text-5xl font-bold leading-snug text-black">Buy and Sell Your Books<span className="text-blue-700"> for the Best Prices</span></h1>
                <p className="md:w-4/5">
                    In today fast-paced digital world, staying updated with the latest technology is crucial. Continuous learning and adapting to new tools and frameworks can open doors to innovative opportunities. Whether in web development, data science, or software engineering, mastering new skills ensures a competitive edge and fosters professional growth.
                </p>
                <div>
                    <input type="search" placeholder="search a book" id="search" className="py-2 px-2 rounded-s-sm rounded-s-sm outline-none" />
                    <button className="bg-blue-700 text-white py-2 px-7 font-medium hover:bg-black transition-all ease-in duration-200 ">Search</button>
                </div>
            </div>
            {/* {right side} */}
            <div className="">
                <BannerCards/>
            </div>
        </div>
    </div>
  )
}

export default Banner
