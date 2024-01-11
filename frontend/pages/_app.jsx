import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      background-color: #d9d9d9;
    }

    body {
      font-family: 'Roboto', sans-serif;
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