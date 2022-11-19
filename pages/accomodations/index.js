import { useRouter } from 'next/router'
import Accomodation from 'components/Accomodation'
import { ACCOMODATION_TYPE, PRODUCT_TYPE } from 'utils/constant'
import axios from 'axios'

const AccomodationListPage = ({ accomodationList, categoryList }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading ...</h1>
  }

  return (
    <Accomodation
      accomodationType={ACCOMODATION_TYPE.LIST}
      accomodationList={accomodationList}
      categoryList={categoryList}
      accomodationDetail={{}}
    />
  )
}

export async function getServerSideProps(context) {
  const { page = 1, limit = 9, orderBy = '', categories = '' } = context.query
  const options = {
    page,
    limit,
  }
  if (orderBy) options.orderBy = orderBy
  if (categories) options.categories = categories

  // const productList = await axios.get(`${process.env.HOST_API}/product`, { params: options }).then((res) => res.data)

  // const categoryList = await axios.get(`${process.env.HOST_API}/categories`).then((res) => res.data)

  return {
    props: { accomodationList: [], categoryList: [] },
  }
}

export default AccomodationListPage
