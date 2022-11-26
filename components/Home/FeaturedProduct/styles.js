import css from 'styled-jsx/css'
export default css`
  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F0EFE5;
  }
  h1.title {
    font-family: Ubuntu;
    font-size: 32px;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-top: 32px;
  }
  .desc {
    font-size: 24px;
    margin-top: 12px;
    color: #444;
    text-align: center;
    color: #796d6d;
  }
  .featured-products {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 32px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn-wrapper {
    max-width: 1100px;
    width: 100%;
    padding: 0 32px;
    margin: 0 auto;

    button {
      width: 100%;
      padding: 11px 15px;
      background: #061341;
      border-radius: 4px;
      border: 1px solid #1e7e70;
      cursor: pointer;
      color: white;
      font-size: 32px;
      text-decoration: none;
      transition: all 0.3s;

      &:hover {
        background: white;
        border-color: #1e7e70;
        color: #1e7e70;
      }

      &:active {
        transform: scale(0.98);
      }
    }
  }
`
