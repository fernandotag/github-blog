import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Routes'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter basename={window.location.pathname || ''}>
        <Router></Router>
      </BrowserRouter>
      <GlobalStyle></GlobalStyle>
    </ThemeProvider>
  )
}

export default App
