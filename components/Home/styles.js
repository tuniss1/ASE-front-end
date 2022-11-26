import css from 'styled-jsx/css'

export default css`
  .container {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100vh;
  }
  .home-wrapper {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100vh;
  }

  .bg {
    margin-top: 80px;
    margin-bottom: 120px;
    width: 100%;
    min-height: 315px;
    background: url('/post-bg.png');
    background-size: cover;
    background-position: center;
    position: relative;

    .shadow-layer {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);

      display: flex;

      div {
        max-width: 50%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 50%;

        color: #eaeaea;
        font-size: 64px;
        height: 100%;
      }
    }
  }
`
