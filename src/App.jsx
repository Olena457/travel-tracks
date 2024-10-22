import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import ToastNotification from './components/ToastNotification/ToastNotification.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));
const ShoweMorePage = lazy(() =>
  import('./pages/ShoweMorePage/ShoweMorePage.jsx')
);
const FeaturesFavorite = lazy(() =>
  import('./components/FeaturesFavorite/FeaturesFavorite.jsx')
);
const ReviewFavorite = lazy(() =>
  import('./components/ReviewFavorite/ReviewFavorite.jsx')
);
const FavoriteCampPage = lazy(() =>
  import('./pages/FavoriteCampPage/FavoriteCampPage.jsx')
);

function App() {
  return (
    <>
      <Layout />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<ShoweMorePage />}>
            <Route path="features" element={<FeaturesFavorite />}></Route>
            <Route path="reviews" element={<ReviewFavorite />}></Route>
          </Route>
          <Route
            path="catalog/${favoriteIds[0]}"
            element={<FavoriteCampPage />}
          />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
      <ToastNotification />
    </>
  );
}

export default App;
