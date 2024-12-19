// import React from 'react'

import Banner from "../components/Banner"
import BestSellerBooks from "./BestSellerBooks"
import FavouriteBooks from "./FavouriteBooks"
import OtherBook from "./OtherBook"
import PromoBanner from "./PromoBanner"
import Reviews from "./Reviews"

const Front = () => {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
      <FavouriteBooks/>
      <PromoBanner/>
      <OtherBook/>
      <Reviews/>
    </div>
  )
}

export default Front
