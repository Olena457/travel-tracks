import { useId } from 'react';
import css from './Sidebar.module.css';
import Button from '../Button/Button.jsx';
import VehicleKit from '../VehicleKit/VehicleKit.jsx';
import Vehicletype from './../VehicleType/Vehicletype';
const locationId = useId();

const handleChangeLocation = e => {
  dispatch(changeFilterLocation(e.target.value));
};
function SideBar() {
  return (
    <section className={css.sidebar}>
      <div className={css.wrapperLocation}>
        <label htmlFor={locationId} className={css.labelLocation}>
          Location
        </label>
        <div className={css.wrapperInput}>
          <input
            className={css.inputLocation}
            type="text"
            name="location"
            id={location}
            value={locationValue}
            onChange={handleChangeLocation}
          />
          <Icon
            id="location"
            width={20}
            height={20}
            className={css.iconLocation}
          />
        </div>
      </div>
      <p className={css.text}>Filters</p>
      <VehicleKit />
      <Vehicletype />
      <Button onClick={handleSearch} className={css.baseButton}>
        Search
      </Button>
    </section>
  );
}

export default SideBar;
// кнопку прописати
