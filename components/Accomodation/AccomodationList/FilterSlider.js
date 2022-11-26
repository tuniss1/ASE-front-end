import styles from './styles'
import { Slider } from '@mui/material'
import { useState } from 'react'
import Image from 'next/image'

const FilterSlider = ({ filter, handleChangePrice, handleChangeCapacity, handleChangeSize }) => {
  const minPrice = 0,
    maxPrice = 1000
  const [price, setPrice] = useState(filter.price.value)
  const [capacity, setCapacity] = useState(filter.capacity.value)
  const [size, setSize] = useState(filter.size.value)

  return (
    <div className="elementor-col">
      <div className="filter-content">
        <h5>Price</h5>
        <Slider
          value={price}
          valueLabelDisplay="auto"
          onChange={(e, value) => setPrice(value)}
          max={maxPrice}
          min={minPrice}
          onChangeCommitted={handleChangePrice}
        />
        <div className="label">
          {/* {'Price: '} */}
          {/* <span className="box"> */}
          <span className="from" style={{ fontWeight: 700 }}>
            <span>$</span>
            <span>{price[0]}</span>
          </span>
          {' - '}
          <span className="to" style={{ fontWeight: 700 }}>
            {price[1]}$
          </span>
          {/* </span> */}
        </div>
      </div>
      <div className="filter-content">
        <h5>Capacity</h5>
        <Slider
          value={capacity}
          onChange={(e, value) => setCapacity(value)}
          onChangeCommitted={handleChangeCapacity}
          valueLabelDisplay="auto"
          max={99}
          min={0}
        />
        <div className="label">
          {/* {'Capacity: '} */}
          {/* <span> */}
          <span className="from" style={{ fontWeight: 700 }}>
            <div style={{ width: 16, height: 16 }}>
              <Image src="/capacity.png" width={16} height={16} />
            </div>
            <span>{capacity[0]}</span>
          </span>
          {' - '}
          <span className="to" style={{ fontWeight: 700 }}>
            <div style={{ width: 16, height: 16 }}>
              <Image src="/capacity.png" width={16} height={16} />
            </div>
            <span>{capacity[1]}</span>
          </span>
          {/* </span> */}
        </div>
      </div>
      <div className="filter-content">
        <h5>Size</h5>
        <Slider
          value={size}
          onChange={(e, value) => setSize(value)}
          onChangeCommitted={handleChangeSize}
          valueLabelDisplay="auto"
          max={1000}
          min={0}
        />
        <div className="label">
          {/* {'Price: '} */}
          {/* <span> */}
          <span className="from" style={{ fontWeight: 700 }}>
            <div style={{ width: 16, height: 24 }}>
              <Image src="/size.png" width={16} height={24} />
            </div>
            <span>
              {size[0]}m<sup>2</sup>
            </span>
          </span>
          {' - '}
          <span className="to" style={{ fontWeight: 700 }}>
            <div style={{ width: 16, height: 24 }}>
              <Image src="/size.png" width={16} height={24} />
            </div>
            <span>
              {size[1]}m<sup>2</sup>
            </span>
          </span>
          {/* </span> */}
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default FilterSlider
