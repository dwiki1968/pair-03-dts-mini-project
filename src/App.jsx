import HomePage from "./containers/HomePage";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./containers/RegisterPage";
import MovieDetailPage from "./containers/MovieDetailPage";
import theme from "./utils/theme";
import LoginPage from "./containers/LoginPage";
import Layout from "./components/Layout";
import ProtectedComponent from "./components/ProtectedComponent";
import NotFound from "./containers/NotFound";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route
            path="/movie/:movieId"
            element={
              <ProtectedComponent>
                <Layout>
                  <MovieDetailPage />
                </Layout>
              </ProtectedComponent>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
