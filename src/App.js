import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Toaster } from 'react-hot-toast';

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
     <Route index element={<ChatPage />} />
     <Route path="/chat" element={<MainPage />} />
     <Route path="*" element={<NotFoundPage />} />
    </Route>
   </Routes>
   <GlobalStyle />
   <Toaster position="top-right" reverseOrder={false} />
  </>
 );
}

export default App;
