
import { lazy, Suspense } from react;
import {Route, Routes} from 'react-router-dom'
import './App.css';
import Layout from './components/Layout/Layout.jsx'
import ToastNotification from './components/ToastNotification/ToastNotification.jsx';
// import Loader from './components/Loader/Loader.jsx'

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));
const CamperPageFeature = lazy(() => import('./pages/CamperPageFeature/CamperPageFeature.jsx'));
const CamperPageReviews = lazy(() => import('./pages/CamperPageReviews/CamperPageReviews.jsx'));


function App() {
  return (
    <>
    <Layout />
    <Suspense>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/campers" element={<CatalogPage />} />
      <Route path="/campers/:id" element={<CamperPageFeature />}>
            <Route path="reviews" element={<CamperPageReviews />} />
          </Route>
       <Route path="*" element={<HomePage />} />
      </Routes>
      </Suspense>
  <ToastNotification/>
  
  </>);
}

export default App;
