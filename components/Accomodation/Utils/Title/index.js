import styles from './styles'
import Link from 'next/link'
import { ACCOMODATION_TYPE } from 'utils/constant'

const Title = ({ accomodationType, accomodationName }) => {
  return (
    <div className="title-page">
      {/* <div className="container">
        <div className="row">
          <div className="col-md-6 inner-title-page">
            <h1>Shop</h1>
            <div className="breadscrum">
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/accomodations">
                <a>/Accomodation</a>
              </Link>
              {accomodationType == ACCOMODATION_TYPE.LIST ? null : `/${accomodationName}`}
            </div>
          </div>
        </div>
      </div> */}
      <style jsx>{styles}</style>
    </div>
  )
}

export default Title
