import styles from './styles'
import Image from 'next/image'
import Link from 'next/link'

const FeaturedCard = ({ trendingProducts }) => {
  // trendingProducts = [productDetail]

  return (
    <div className="elementor-column">
      <div className="elementor-column-wrapper">
        <div className="woocommerce">
          <ul className="products">
            {trendingProducts.slice(0, 8).map((product) => (
              <Link href={`/accomodations/${product._id}`} key={product._id}>
                <li className="product-wrapper" key={product._id}>
                  <div className="product">
                    <div>
                      <Image
                        src={product.images && product.images.length ? product.images[0].url : '/no-image.png'}
                        alt="product image"
                        width={900}
                        height={800}
                      />
                    </div>
                    <div className="product-detail">
                      <div>
                        <p style={{ marginBottom: 5, fontSize: 17, fontWeight: 'bold' }}>Type: {product.type}</p>
                        <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                          <Image src={'/icons/Address2.svg'} width={17} height={17} />
                          <p style={{ marginLeft: '6px' }} className="address">
                            {' '}
                            Adress: {product.address}, {product.district}, {product.ward}
                          </p>
                        </div>
                      </div>
                      <div style={{ fontSize: 30 }}>
                        <p>${product.price}</p>
                      </div>
                    </div>
                    <div style={{ backgroundColor: 'white', fontSize: 1, color: 'white' }}>
                      <p>abc</p>
                    </div>
                    <div
                      style={{
                        backgroundColor: '1E7E70',
                        padding: '10px 8px',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        display: 'flex',
                        color: 'white',
                      }}
                    >
                      <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                        <Image src={'/icons/space.svg'} width={17} height={17} />
                        <p style={{ marginLeft: '8px', marginRight: '12px' }}>
                          {product.size ? (
                            <>
                              {product.size.slice(0, -1)}
                              <sup>2</sup>
                            </>
                          ) : (
                            <></>
                          )}
                        </p>
                        <Image src={'/icons/Bed.svg'} width={17} height={17} />
                        <p style={{ marginLeft: '8px' }}>{product.capacity}</p>
                      </div>
                      <div
                        style={{
                          border: 1,
                          padding: '9px 24px',
                          backgroundColor: 'white',
                          borderRadius: '7px',
                          color: 'black',
                        }}
                      >
                        <p>Avaible</p>
                      </div>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default FeaturedCard
