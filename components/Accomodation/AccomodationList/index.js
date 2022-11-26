import { useEffect, useReducer, useState } from 'react'
import styles from './styles'
import FilterSlider from './FilterSlider'
import FilterInput from './FilterInput'
import { useRouter } from 'next/router'
import FilterSort from './FilterSort'

const initialState = {
  price: { isShow: false, value: [0, 1000] },
  capacity: { value: [0, 99], isShow: false },
  size: { value: [0, 1000], isShow: false },
  district: '',
  type: '',
  ward: '',
  sort: {
    label: 'Default',
    value: '',
  },
}

function reducer(state, action) {
  switch (action.type) {
    case 'price':
      return { ...state, price: action.payload }
    case 'capacity':
      return { ...state, capacity: action.payload }
    case 'size':
      return { ...state, size: action.payload }
    case 'district':
      return { ...state, district: action.payload }
    case 'type':
      return { ...state, type: action.payload }
    case 'ward':
      return { ...state, ward: action.payload }
    case 'sort':
      return { ...state, sort: action.payload }
    default:
      return { ...initialState }
  }
}

const AccomodationList = ({ accomodationList, categoryList }) => {
  const [filter, dispatch] = useReducer(reducer, initialState)
  const router = useRouter()

  const filtering = () => {
    const price = filter.price.isShow ? { minPrice: filter.price.value[0], maxPrice: filter.price.value[1] } : {}

    const capacity = filter.capacity.isShow
      ? { minPrice: filter.capacity.value[0], maxPrice: filter.capacity.value[1] }
      : {}

    const size = filter.size.isShow ? { minPrice: filter.size.value[0], maxPrice: filter.size.value[1] } : {}

    const sort = filter.sort.value ? { sort: filter.sort.value } : {}

    router.push('/accomodations', {
      query: {
        district: filter.district,
        ward: filter.ward,
        type: filter.type,
        ...price,
        ...capacity,
        ...size,
        ...sort,
      },
    })
  }

  const handleChangePrice = (e, value) => {
    dispatch({ type: 'price', payload: { isShow: true, value } })
  }

  const handleChangeCapacity = (e, value) => {
    dispatch({ type: 'capacity', payload: { isShow: true, value } })
  }

  const handleChangeSize = (e, value) => {
    dispatch({ type: 'size', payload: { isShow: true, value } })
  }

  const handleChangeDistrict = (e, value) => {
    dispatch({ type: 'district', payload: value.value })
  }

  const handleChangeWard = (e, value) => {
    dispatch({ type: 'ward', payload: value.value })
  }

  const handleChangeType = (e, value) => {
    dispatch({ type: 'type', payload: value.value })
  }

  const handleChangeSort = (e, value) => {
    dispatch({ type: 'sort', payload: value })
  }

  const handleCancelPrice = () => {
    dispatch({ type: 'price', payload: { isShow: false, value: filter.price.value } })
  }

  const handleCancelCapacity = () => {
    dispatch({ type: 'capacity', payload: { isShow: false, value: filter.capacity.value } })
  }

  const handleCancelSize = () => {
    dispatch({ type: 'size', payload: { isShow: false, value: filter.size.value } })
  }

  const filterSliderProps = {
    filter,
    handleChangePrice,
    handleChangeCapacity,
    handleChangeSize,
  }

  const filterInputProps = {
    filter,
    handleCancelCapacity,
    handleCancelPrice,
    handleCancelSize,
    handleChangeDistrict,
    handleChangeWard,
    handleChangeType,
    filtering,
  }

  const filterSortProps = {
    filter,
    handleChangeSort,
  }

  return (
    <div className="elementor-container">
      <div className="elementor-row">
        <FilterSlider {...filterSliderProps} />
        <div className="elementor-col">
          <FilterInput {...filterInputProps} />
          <div className="sort-container">
            <p>Sort by price:</p>
            <FilterSort {...filterSortProps} />
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default AccomodationList
