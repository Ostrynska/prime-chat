import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { GlobalStyle } from './GlobalStyles';
import { SharedLayout } from './components/SharedLayout/SharedLayout';

const MainPage = lazy(() => import('./pages/HomePage'));

function App() {
 return (
  <>
   <Routes>
    <Route path="/" element={<SharedLayout />}>
     <Route path="/" element={<MainPage />} />
    </Route>
   </Routes>
   <GlobalStyle />
  </>
 );
}

export default App;
