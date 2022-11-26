import { useRouter } from 'next/router'
import { PRODUCT_TYPE } from 'utils/constant'
import AccomodationSingle from 'components/Accomodation/AccomodationSingle'

const ProductSinglePage = ({ data }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading ...</h1>
  }

  return <AccomodationSingle productType={PRODUCT_TYPE.SINGLE} data={data} />
}

export async function getServerSideProps({ params }) {
  const { id } = params

  // const productData = await axios.get(`${process.env.HOST_API}/product/${id}`).then((res) => res.data.productDetail)

  // if (!productData) {
  //   return {
  //     notFound: true,
  //   }
  // }

  return {
    props: {
      data: {},
    },
  }
}

export default ProductSinglePage
