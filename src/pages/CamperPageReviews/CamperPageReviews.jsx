import GeneralWrapperFavorite from '../../components/GeneralWrapperFavorite/GeneralWrapperFavorite.jsx';
import ToggleFeaturesReviews from './../../components/Navigation/Navigation';
import GalleryCamperFavorite from '../../components/GalleryCamperFavorite/GalleryCamperFavorite.jsx';

function CamperPageReviews() {
  return (
    <>
      <GeneralWrapperFavorite>
        <GalleryCamperFavorite />
        <ToggleFeaturesReviews />
        <ReviewFavorite />
      </GeneralWrapperFavorite>
      {/* <Outlet /> */}
    </>
  );
}

export default CamperPageReviews;
