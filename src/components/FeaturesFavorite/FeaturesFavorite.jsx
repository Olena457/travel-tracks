import FeaturesItem from '../FeaturesItem/FeaturesItem.jsx';
import { FormBook } from '../FormBook/FormBook.jsx';
import css from './FeaturesFavorite.module.css';

const FeaturesFavorite = ({ item }) => {
  return (
    <>
      <div className={css.container}>
        <FeaturesItem item={item} />
        <h4 className={css.title}>Vehicle details</h4>
        <ul className={css.listFeature}>
          <li className={css.featuresItem}>
            <span>Form</span>
            <span>{item.form}</span>
          </li>
          <li className={css.featuresItem}>
            <span>Length</span>
            <span>{item.length}</span>
          </li>
          <li className={css.featuresItem}>
            <span>Width</span>
            <span>{item.width}</span>
          </li>
          <li className={css.featuresItem}>
            <span>Height</span>
            <span>{item.height}</span>
          </li>
          <li className={css.featuresItem}>
            <span>Tank</span>
            <span>{item.tank}</span>
          </li>
          <li className={css.featuresItem}>
            <span>Consumption</span>
            <span>{item.consumption}</span>
          </li>
        </ul>
        <FormBook />
      </div>
    </>
  );
};

export default FeaturesFavorite;
