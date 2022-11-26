import css from 'styled-jsx/css'

export default css`
  .wrapper {
    height: 100%;

    .round-layer {
      background: white;
      position: absolute;
      padding: 32px;
      width: 50%;
      height: 100%;
      right: 0;
      z-index: -1;
    }

    .relative {
      display: relative;
    }

    .form-bg {
      position: absolute;
      width: 50%;
      height: 100%;
      background: rgba(30, 126, 112, 0.47);
    }

    .form-wrapper {
      width: 500px;
      margin: 0 auto;
      position: relative;
      top: 50%;
      transform: translateY(-60%);
      border-radius: 4px;

      .icon-lg {
        margin: 0 auto;
      }

      .pagination {
        max-width: 300px;
        margin: 0 auto;
        margin-top: 00px;
        display: flex;

        div {
          border-bottom: 3px solid #000;
          padding: 8px 15px;
          font-size: 24px;
          cursor: pointer;
          transition: all 0.3s;

          &.current {
            border-color: #c58725;
          }

          &:hover {
            border-color: #c58725;
          }
        }
      }

      .form-container {
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        max-width: 300px;
        .input {
          margin-top: 20px;
          position: relative;

          &:first-child {
            margin-top: 0;
          }

          .icon-sm {
            width: 24px;
            height: 24px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 8px;
          }

          input {
            width: 100%;
            outline: none !important;
            padding: 8px 4px 8px 44px;
            background: #fff;
            border: 1px solid #fff;
            color: #000000;
            font-weight: 100;
            font-size: 16px;
            line-height: 24px;
            border-radius: 5px;

            &::placeholder {
              color: #666;
            }
          }
        }

        .error {
          color: red;
          margin-top: 8px;
        }

        .reset-password {
          margin-top: 8px;

          a {
            text-decoration: none;
            color: #000000;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }

      .form-event {
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        max-width: 300px;

        .button {
          width: 100%;
          padding: 11px 15px;
          color: #1e7e70;
          font-size: 16px;
          lineheight: 20px;
          font-weight: bold;
          border: 1px solid #1e7e70;
          transition: all 0.3s;
          border-radius: 5px;

          cursor: pointer;

          &:hover {
            background: #1e7e70;
            color: #ffffff;
          }

          &:active {
            transform: scale(0.95);
          }
        }

        .sign-in {
          margin-top: 16px;
          color: #000000;

          a {
            text-decoration: none;
            font-weight: 700;
            color: #000000;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`
