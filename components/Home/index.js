import styles from './styles'
import NavBar from 'components/NavBar'
import FeaturedProduct from './FeaturedProduct'
import Footer from '../Utils/Footer'
import HeaderBanner from './HeaderBanner'

const Home = ({ trendingProducts, blogs }) => {
  return (
    <div className="container">
      <NavBar />
      <HeaderBanner />
      <FeaturedProduct trendingProducts={trendingProducts} />
      {/* <BlogPost blogs={blogs} /> */}
      <div className="bg">
        <div className="shadow-layer">
          <div>
            <p>1000+ houses</p>
          </div>
          <div>
            <p>20+ districts</p>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{styles}</style>
    </div>
  )
}

export default Home
