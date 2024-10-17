import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout.jsx';
import ToastNotification from './components/ToastNotification/ToastNotification.jsx';
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx';
import FavoriteCampPage from './pages/FavoriteCampPage/FavoriteCampPage';
import CamperPageFeature from './pages/CamperPageFeature/CamperPageFeature';
import CamperPageReviews from './pages/CamperPageReviews/CamperPageReviews';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <>
      <Layout />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog/:id" element={<FavoriteCampPage />}>
          <Route path="features" element={<CamperPageFeature />} />
          <Route path="reviews" element={<CamperPageReviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
      <ToastNotification />
    </>
  );
}

export default App;

// import { Suspense } from 'react';
// const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
// const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));
// const CamperPageFeature = lazy(() =>
//   import('./pages/CamperPageFeature/CamperPageFeature.jsx')
// );
// const CamperPageReviews = lazy(() =>
//   import('./pages/CamperPageReviews/CamperPageReviews.jsx')
// );
// const FavoriteCampPage = lazy(() =>
//   import('./pages/FavoriteCampPage/FavoriteCampPage.jsx')
// );
