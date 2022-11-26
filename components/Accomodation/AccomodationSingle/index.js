/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import styles from './styles'
import Image from 'next/image'
import Slider from 'components/Utils/Slider/Slider'
import Link from 'next/link'
import { MIN_DESKTOP_WIDTH, MODEL_WIDTH_ABOVE_DESKTOP, MODEL_WIDTH_BELOW_DESKTOP } from 'utils/constant'
import { formatVNprice } from 'utils/function'
import { useDispatch } from 'react-redux'
import { addItem } from 'store/reducers/checkoutSlice'
import NavBar from 'components/NavBar'
import Footer from 'components/Utils/Footer'

const AccomodationSingle = ({ isModel, accomodationSingleData }) => {
  const [dynamicWidth, setDynamicWidth] = useState()
  const [productQuantity, setProductQuantity] = useState(1)
  const dispatch = useDispatch()

  useEffect(() => {
    const handleWindowChange = () => {
      if (isModel) {
        setDynamicWidth(MODEL_WIDTH_BELOW_DESKTOP)
      } else if (window.innerWidth >= MIN_DESKTOP_WIDTH) {
        setDynamicWidth(MODEL_WIDTH_ABOVE_DESKTOP)
      } else {
        setDynamicWidth(MODEL_WIDTH_BELOW_DESKTOP)
      }
    }
    handleWindowChange()
    window.addEventListener('resize', handleWindowChange)
    return window.removeEventListener('resize', handleWindowChange)
  }, [isModel])

  return (
    <div>
      <NavBar />
      <p>abc xyz</p>
      <Footer />
    </div>
  )
}

export default AccomodationSingle
