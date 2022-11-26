import React from 'react'
import styles from './styles'
import FeaturedCard from '../FeaturedCard'
import Link from 'next/link'

const FeaturedProduct = ({ trendingProducts }) => (
  <div className="container">
    <h1 className="title">Trending Products</h1>
    <p className="desc">Best house for your life</p>
    <div className="featured-products">
      <FeaturedCard trendingProducts={trendingProducts} />
    </div>
    <div className="btn-wrapper">
      {/* <button> */}
      <Link href="/accomodations">
        <a style={{backgroundColor:'#796D6D'}}>
          <button>Explore more</button>
        </a>
      </Link>
      {/* </button> */}
    </div>
    <style jsx>{styles}</style>
  </div>
)

export default FeaturedProduct
