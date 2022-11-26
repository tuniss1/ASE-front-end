import css from 'styled-jsx/css'

export default css`
  .elementor-container {
    width: 100%;
    padding: 20px 20px 30px 20px;
    max-width: 1440px;
    overflow-x: hidden;
    margin: 0 auto;

    .elementor-row {
      display: grid;
      grid-template-columns: 25% 75%;

      .elementor-col {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0 20px;

        .filter-content {
          margin-top: 20px;

          &:first-child {
            margin-top: 0;
          }

          &:last-child {
            &::after {
              display: none;
            }
          }

          &::after {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background: #000;
            margin: 20px 0;
          }

          .label {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .from,
            .to {
              min-width: 110px;
              display: flex;
              justify-content: space-between;
              padding: 8px 12px;
              border: 1px solid #000;
              border-radius: 50px;
              align-items: center;
            }
          }
        }

        h5 {
          font-size: 16px;
          margin-bottom: 10px;
        }

        &:nth-child(2) {
        }

        .filter-input {
          min-width: 20%;

          &:nth-child(3) {
            width: 100%;
          }
        }

        .row-wrap {
          display: grid;
          grid-template-columns: 70% 30%;
          margin: 0 30px;
          position: relative;
          background: rgba(30, 126, 112, 0.34);
          border-radius: 10px;
        }

        .col-lg {
          display: flex;
          flex-direction: column;

          .row {
            display: grid;
            grid-template-columns: 50% 50%;
          }

          .chip-container {
            padding: 20px 20px 40px 20px;
            transition: all 0.3s;
            height: auto;
            position: relative;
            min-height: 100px;

            .title {
              font-size: 20px;
              font-weight: 700;
            }
          }
        }
        .col-sm {
          display: flex;
          flex-direction: column;
        }

        .filter-input {
          margin: 20px;
          background: white;
          border-radius: 4px;
        }

        .chip {
          margin-top: 20px;
        }

        .sort-container {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin: 0 30px;
          margin-top: 50px;
          padding-top: 10px;
          column-gap: 8px;
        }
      }
    }
  }
`
