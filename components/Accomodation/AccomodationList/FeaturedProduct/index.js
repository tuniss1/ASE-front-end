import React from 'react'
import styles from './styles'
import FeaturedCard from '../FeaturedCard'
import Link from 'next/link'

const FeaturedProduct = ({ products }) => (
  <div className="container">
    <h1 className="title">Featured Apartments</h1>
    <p className="desc">Best house for your life</p>
    <div className="featured-products">
      <FeaturedCard products={products} />
    </div>
    {/* <div className="btn-wrapper">
      <button>
      <Link href="/accomodations">
        <a>
          <button>Explore more</button>
        </a>
      </Link>
      </button>
    </div> */}
    <style jsx>{styles}</style>
  </div>
)

export default FeaturedProduct
