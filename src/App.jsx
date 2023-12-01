import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@emotion/react";
import { lazy } from 'react';
import theme from "./themes/theme.js";

import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";
const MainPage = lazy(() => import('./pages/MainPage/MainPage.jsx'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
