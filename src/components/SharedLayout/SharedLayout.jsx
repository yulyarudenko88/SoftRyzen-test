import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer.jsx';
import { InfinitySpin } from 'react-loader-spinner';
import { Wrapper, Main, LoaderWrapper } from './SharedLayout.styled';

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
      <Header isMobile={isMobile} />
      <Main>
        <Suspense
          fallback={
            <LoaderWrapper>
              <InfinitySpin width="200" color="#97D28B" />
            </LoaderWrapper>
          }
        >
          <Outlet />
        </Suspense>
      </Main>
      <Footer isMobile={isMobile} />
    </Wrapper>
  );
};

export default SharedLayout;
