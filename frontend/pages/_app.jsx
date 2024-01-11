import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
    }

    html, body {
      font-family: 'Roboto', sans-serif;
      background-color: #d9d9d9;
    }
`

function App ({ Component, pageProps }) {
  return (
    <>
        <GlobalStyle />
        <Component {...pageProps} />
    </>
  )
}

export default App