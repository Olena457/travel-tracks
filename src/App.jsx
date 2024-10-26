import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import ToastNotification from './components/ToastNotification/ToastNotification.jsx';
import Loader from './components/Loader/Loader.jsx';
import './App.css';
const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));
const ShoweMorePage = lazy(() =>
  import('./pages/ShoweMorePage/ShoweMorePage.jsx')
);
const Features = lazy(() => import('./components/Features/Features.jsx'));
const Reviews = lazy(() => import('./components/Reviews/Reviews.jsx'));
const FavoriteCampPage = lazy(() =>
  import('./pages/FavoriteCampPage/FavoriteCampPage.jsx')
);

function App() {
  return (
    <>
      <Layout />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<ShoweMorePage />}>
            <Route path="features" element={<Features />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="/favorites" element={<FavoriteCampPage />} />
        </Routes>
      </Suspense>
      <ToastNotification />
    </>
  );
}

export default App;
