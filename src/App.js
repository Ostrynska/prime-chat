import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { GlobalStyle } from './GlobalStyles';
import { SharedLayout } from './components/SharedLayout/SharedLayout';

const MainPage = lazy(() => import('./pages/HomePage'));
const ChatPage = lazy(() => import('./pages/ChatPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
 return (
  <>
   <Routes>
    <Route path="/" element={<SharedLayout />}>
     <Route index element={<MainPage />} />
     <Route path="/chat" element={<ChatPage />} />
     <Route path="*" element={<NotFoundPage />} />
    </Route>
   </Routes>
   <GlobalStyle />
  </>
 );
}

export default App;
