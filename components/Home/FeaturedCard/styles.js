import css from 'styled-jsx/css'

export default css`
  /* @import url('https://use.typekit.net/vib8pxz.css'); */
  .elementor-column {
    display: flex;
    width: 100%;
    min-width: 50%;
    max-width: 100;
    height: 100%;
    .elementor-column-wrapper {
      width: 100%;
      display: flex;
      .woocommerce {
        width: 100%;
        .products {
          /* important */
          margin-top: 2rem;
          /* important */
          padding-left: 0;

          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          .product-wrapper {
            display: block;
            //text-align: center;
            padding: 10px;
            margin: 10px 0px;
            flex: 25%;
            max-width: 25%;

            .product {
              //border: 0px solid #ffff;
              //border-radius: 20px;
              cursor: pointer;
              transition: all 0.2s ease-in-out;
              //padding: 20px;
              background: #1E7E70;
              &:hover {
                box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px 0px;
              }
            }

            .product-img {
            }
            .product-detail {
              width: 100%;
              // font-family: 'Montserrat', sans-serif;
              // font-weight: 600;
              justify-content : space-between;
              flex-direction : row;
              display : flex;
              padding: 10px;
              color: white;
              }
              .price {
                width: 100%;
                font-size: 18px;
                font-weight: 700;
                color: #273172;
                margin-bottom: 0.5rem;
                cursor: text;
                span {
                  text-decoration: underline;
                }
              }
            }
          }
        }
      }
    
  }
`
