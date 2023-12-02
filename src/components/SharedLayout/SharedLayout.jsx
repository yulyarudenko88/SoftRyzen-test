import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../Header/Header";
import Footer from '../Footer/Footer.jsx';
import { Wrapper, Main } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default SharedLayout;
