import AppWrapper from "./Components/AppWrapper/AppWrapper"
import { Header } from "./Components/header/HeaderContainer"
import { MainContainer } from "./Components/main/MainContainer"
import { GlobalStyles } from "./styles/GlobalStyles"

function App() {

  return (
    <>
      <AppWrapper>
        <Header />
        <MainContainer />
      </AppWrapper>
      <GlobalStyles />
    </>
  )
}

export default App
