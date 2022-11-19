import styles from './styles'
import AccomodationSingle from './AccomodationSingle'
import AccomodationList from './AccomodationList'
import Title from 'components/Accomodation/Utils/Title'
import { ACCOMODATION_TYPE } from 'utils/constant'
import NavBar from 'components/NavBar'
import Footer from 'components/Utils/Footer'

const Accomodation = ({ accomodationType, accomodationList, categoryList = [], accomodationDetail }) => {
  return (
    <div className="accomodation-wrapper">
      <NavBar />
      <Title
        accomodationType={accomodationType}
        accomodationName={accomodationType === ACCOMODATION_TYPE.SINGLE ? accomodationDetail.name : ''}
      />
      {accomodationType === ACCOMODATION_TYPE.SINGLE ? (
        <AccomodationSingle isModel={false} accomodationSingleData={accomodationDetail} />
      ) : (
        <AccomodationList accomodationList={accomodationList} categoryList={categoryList} />
      )}
      <Footer />
      <style jsx>{styles}</style>
    </div>
  )
}

export default Accomodation
