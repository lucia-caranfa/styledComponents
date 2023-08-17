
import './App.css'
import ComponenteEstilizado from './components/ComponenteEstilizado'
import { createGlobalStyle } from 'styled-components'  //componente global

function App() {

  const GlobalStyle = createGlobalStyle`
  h2 {
    padding: 2rem;
    background-color: #3f3e3e;
    color: #61dafb;
    text-transform: uppercase;
  }`
  return (
    <>
    <GlobalStyle/>
  <h2>Styled components</h2>
  <ComponenteEstilizado/>
    </>
  )
}

export default App
