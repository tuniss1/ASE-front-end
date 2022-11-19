import React from 'react'
import styles from './styles'
import FeaturedCard from '../FeaturedCard'
const FeaturedProduct = ({ trendingProducts }) => (
  <div className="container">
    <h1 className="title">Trending Accommodation</h1>
    <p className="desc">Most reliable places</p>
    <div className="featured-products">
      <FeaturedCard trendingProducts={trendingProducts} />
    </div>
    <style jsx>{styles}</style>
  </div>
)

export default FeaturedProduct
