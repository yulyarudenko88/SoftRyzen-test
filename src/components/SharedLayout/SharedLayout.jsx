import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../Header/Header";
import Footer from '../Footer/Footer.jsx';
import { Wrapper, Main } from "./SharedLayout.styled";

const SharedLayout = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    const updateMedia = () => {
      if (window.innerWidth >= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', updateMedia);

    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <Wrapper>
      <Header  isMobile={isMobile}/>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer isMobile={isMobile}/>
    </Wrapper>
  );
};

export default SharedLayout;
