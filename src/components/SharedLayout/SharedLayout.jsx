import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { Loader } from '../Loader/Loader';

export const SharedLayout = () => {
 return (
  <>
   <Header />
   <Suspense fallback={<Loader />}>
    <Outlet />
   </Suspense>
   <Footer />
  </>
 );
};
