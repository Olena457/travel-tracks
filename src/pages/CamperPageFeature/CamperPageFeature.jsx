import FeaturesFavorite from '../../components/FeaturesFavorite/FeaturesFavorite.jsx';
import GalleryCamperFavorite from '../../components/GalleryCamperFavorite/GalleryCamperFavorite.jsx';
import GeneralWrapperFavorite from '../../components/GeneralWrapperFavorite/GeneralWrapperFavorite.jsx';
import ToggleFeaturesReviews from '../../components/Navigation/Navigation.jsx';

const CamperPageFeature = () => {
  return (
    <>
      <GeneralWrapperFavorite>
        <GalleryCamperFavorite />
        <ToggleFeaturesReviews />
        <FeaturesFavorite />
      </GeneralWrapperFavorite>
    </>
  );
};

export default CamperPageFeature;
