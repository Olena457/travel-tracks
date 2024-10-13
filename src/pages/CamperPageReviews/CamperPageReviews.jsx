import AppBar from '../../components/AppBar/AppBar.jsx';
import GeneralWrapperFavorite from '../../components/GeneralWrapperFavorite/GeneralWrapperFavorite.jsx';
import ToggleFeaturesReviews from './../../components/Navigation/Navigation';
import GalleryCamperFavorite from '../../components/GalleryCamperFavorite/GalleryCamperFavorite.jsx';

function CamperPageReviews() {
  return (
    <>
      <AppBar />
      <GeneralWrapperFavorite>
        <GalleryCamperFavorite />
        <ToggleFeaturesReviews />
        <ReviewFavorite />
      </GeneralWrapperFavorite>
    </>
  );
}

export default CamperPageReviews;
