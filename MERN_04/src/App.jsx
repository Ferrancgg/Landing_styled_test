import { ThemeProvider } from "styled-components";



import theme from "./components/styles/themes";
import GlobalStyles from "./components/styles/GlobalStyles";
import AppRouter from "./routes/AppRouter";
import ContainerResponsive from "./components/ContainerResponsive";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ContainerResponsive>
          <Header/>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
          <Footer/>
        </ContainerResponsive>
      </ThemeProvider>
    </>
  );
}

export default App;
