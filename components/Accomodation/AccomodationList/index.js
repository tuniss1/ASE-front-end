import { useState } from 'react'
import styles from './styles'

const AccomodationList = ({ accomodationList, categoryList }) => {
  const [query, setQuery] = useState({
    page: 1,
    limit: 9,
    orderBy: '',
    categories: '',
  })

  return (
    <div className="elementor-container">
      <div className="elementor-row">
        <div className="elementor-row-left">
          <div className="elementor-column-wrap">
            <div className="elementor-widget-wrap"></div>
          </div>
        </div>
        <div className="elementor-row-right"></div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default AccomodationList
