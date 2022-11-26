import Home from '../components/Home'
import axios from 'axios'
import { getAccomodationList } from 'utils/api'

const HomePage = ({ trendingProducts, blogs }) => {
  return <Home trendingProducts={trendingProducts} blogs={blogs} />
}

export async function getStaticProps() {
  try {
    // const trendingProducts = await axios.get(`${process.env.HOST_API}/home`).then((res) => res.data.trendingProducts)
    // const blogs = await axios.get(`${process.env.HOST_API}/blog`).then((res) => res.data)
    const trendingProducts = await getAccomodationList({}).then(({ data }) => data.data)

    return {
      props: {
        trendingProducts,
        blogs: [],
      },
      revalidate: 10,
    }
  } catch (e) {
    console.log(e)
    return {
      props: {
        trendingProducts: [],
        blogs: [],
      },
      revalidate: 10,
    }
  }
}

export default HomePage
