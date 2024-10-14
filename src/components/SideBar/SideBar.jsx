// import { useId } from 'react';
// import css from './Sidebar.module.css';
// import Button from '../Button/Button.jsx';
// import VehicleKit from '../VehicleKit/VehicleKit.jsx';
// import Vehicletype from './../VehicleType/Vehicletype';
// import { setLocation } from '../../redux/filters/filtersSlice.js';

// const handleSearch = e => {
//   dispatch(setLocation, e.target.value);
// };
// function SideBar() {
//   const locationId = useId();
//   return (
//     <section className={css.sidebar}>
//       <div className={css.wrapperLocation}>
//         <label htmlFor={locationId} className={css.labelLocation}>
//           Location
//         </label>
//         <div className={css.wrapperInput}>
//           <input
//             className={css.inputLocation}
//             type="text"
//             name="location"
//             id={location}
//             value={locationValue}
//             onChange={handleChangeLocation}
//           />
//           <IconOption
//             id="location"
//             width={20}
//             height={20}
//             className={css.IconOptionLocation}
//           />
//         </div>
//       </div>
//       <p className={css.text}>Filters</p>
//       <VehicleKit />
//       <Vehicletype />
//       <Button onClick={handleSearch} className={css.baseButton}>
//         Search
//       </Button>
//     </section>
//   );
// }

// export default SideBar;
// _____________________________________________-2
// import React, { useCallback } from 'react';
// import { useId } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import {
//   setLocation,
//   setVehicleType,
//   toggleEquipment,
// } from '../../redux/filters/filtersSlice.js';
// import css from './Sidebar.module.css';
// import Button from '../Button/Button.jsx';
// import VehicleKit from '../VehicleKit/VehicleKit.jsx';
// import VehicleType from '../VehicleType/VehicleType';
// import {
//   setLocation,
//   setVehicleType,
//   toggleEquipment,
// } from '../../redux/filters/filtersSlice';
// import IconOption from '../IconOption/IconOption';

// const SideBar = () => {
//   const locationId = useId();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const filters = useSelector(state => state.filters);

//   const handleInputChange = useCallback(
//     e => {
//       const { name, value } = e.target;
//       if (name === 'location') {
//         dispatch(setLocation(value));
//       } else if (name === 'vehicleType') {
//         dispatch(setVehicleType(value));
//       }
//     },
//     [dispatch]
//   );

//   const handleCheckboxChange = useCallback(
//     e => {
//       const { name } = e.target;
//       dispatch(toggleEquipment(name));
//     },
//     [dispatch]
//   );

//   const handleSubmit = e => {
//     e.preventDefault();
//     const params = new URLSearchParams();

//     if (filters.location) params.append('location', filters.location);
//     if (filters.vehicleType) params.append('vehicleType', filters.vehicleType);
//     Object.keys(filters.equipment).forEach(key => {
//       if (filters.equipment[key]) params.append(key, true);
//     });

//     navigate(`/catalog?${params.toString()}`);
//   };

//   return (
//     <section className={css.sidebar}>
//       <form onSubmit={handleSubmit} className={css.form}>
//         <div className={css.wrapperLocation}>
//           <label htmlFor={locationId} className={css.labelLocation}>
//             Location
//           </label>
//           <div className={css.wrapperInput}>
//             <input
//               className={css.inputLocation}
//               type="text"
//               name="location"
//               id={locationId}
//               value={filters.location}
//               onChange={handleInputChange}
//             />
//             <IconOption
//               id="location"
//               width={20}
//               height={20}
//               className={css.IconOptionLocation}
//             />
//           </div>
//         </div>
//         <p className={css.text}>Filters</p>
//         <VehicleKit />
//         <VehicleType />
//         <label>
//           <input
//             type="checkbox"
//             name="ac"
//             checked={filters.equipment.ac}
//             onChange={handleCheckboxChange}
//           />
//           AC
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="automatic"
//             checked={filters.equipment.automatic}
//             onChange={handleCheckboxChange}
//           />
//           Automatic
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="kitchen"
//             checked={filters.equipment.kitchen}
//             onChange={handleCheckboxChange}
//           />
//           Kitchen
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="tv"
//             checked={filters.equipment.tv}
//             onChange={handleCheckboxChange}
//           />
//           TV
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="bathroom"
//             checked={filters.equipment.bathroom}
//             onChange={handleCheckboxChange}
//           />
//           Bathroom
//         </label>
//         <Button type="submit" className={css.baseButton}>
//           Search
//         </Button>
//       </form>
//     </section>
//   );
// };

// export default SideBar;
// ________________________________________________________3
// import React, { useCallback, useMemo } from 'react';
// import { useId } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import {
//   setLocation,
//   setVehicleType,
//   toggleEquipment,
// } from '../../redux/filters/filtersSlice';
// import css from './Sidebar.module.css';
// import Button from '../Button/Button.jsx';
// import VehicleKit from '../VehicleKit/VehicleKit.jsx';
// import VehicleType from '../VehicleType/VehicleType';
// import IconOption from '../IconOptions/IconOptions.jsx';

// const SideBar = () => {
//   const locationId = useId();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const filters = useSelector(state => state.filters);

//   const handleInputChange = useCallback(
//     e => {
//       const { name, value } = e.target;
//       if (name === 'location') {
//         dispatch(setLocation(value));
//       } else if (name === 'vehicleType') {
//         dispatch(setVehicleType(value));
//       }
//     },
//     [dispatch]
//   );

//   const handleCheckboxChange = useCallback(
//     e => {
//       const { name } = e.target;
//       dispatch(toggleEquipment(name));
//     },
//     [dispatch]
//   );

//   const handleSubmit = e => {
//     e.preventDefault();
//     const params = new URLSearchParams();
//     if (filters.location) params.append('location', filters.location);
//     if (filters.vehicleType) params.append('vehicleType', filters.vehicleType);
//     Object.keys(filters.equipment).forEach(key => {
//       if (filters.equipment[key]) params.append(key, true);
//     });
//     navigate(`/catalog?${params.toString()}`);
//   };

//   const memoizedFilters = useMemo(() => filters, [
//     filters.location,
//     filters.vehicleType,
//     filters.equipment,
//   ]);

//   return (
//     <section className={css.sidebar}>
//       <form onSubmit={handleSubmit} className={css.form}>
//         <div className={css.wrapperLocation}>
//           <label htmlFor={locationId} className={css.labelLocation}>
//             Location
//           </label>
//           <div className={css.wrapperInput}>
//             <input
//               className={css.inputLocation}
//               type="text"
//               name="location"
//               id={locationId}
//               value={memoizedFilters.location}
//               onChange={handleInputChange}
//             />
//             <IconOption
//               id="location"
//               width={20}
//               height={20}
//               className={css.Iconocation}
//             />
//           </div>
//         </div>
//         <p className={css.text}>Filters</p>
//         <VehicleKit />
//         <VehicleType />
//         <label>
//           <input
//             type="checkbox"
//             name="ac"
//             checked={memoizedFilters.equipment.ac}
//             onChange={handleCheckboxChange}
//           />
//           AC
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="automatic"
//             checked={memoizedFilters.equipment.automatic}
//             onChange={handleCheckboxChange}
//           />
//           Automatic
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="kitchen"
//             checked={memoizedFilters.equipment.kitchen}
//             onChange={handleCheckboxChange}
//           />
//           Kitchen
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="tv"
//             checked={memoizedFilters.equipment.tv}
//             onChange={handleCheckboxChange}
//           />
//           TV
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="bathroom"
//             checked={memoizedFilters.equipment.bathroom}
//             onChange={handleCheckboxChange}
//           />
//           Bathroom
//         </label>
//         <Button type="submit" className={css.baseButton}>
//           Search
//         </Button>
//       </form>
//     </section>
//   );
// };

//  export default React.memo(SideBar);
import React, { useCallback, useMemo } from 'react';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPage } from '../../redux/campers/campersSlice.js';
import {
  setLocation,
  setVehicleType,
  toggleEquipment,
} from '../../redux/filters/filtersSlice';
import css from './Sidebar.module.css';
import Button from '../Button/Button.jsx';
import VehicleKit from '../VehicleKit/VehicleKit.jsx';
import VehicleType from '../VehicleType/VehicleType.jsx';
import IconOption from '../IconOptions/IconOptions.jsx';

const SideBar = () => {
  const locationId = useId();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filters = useSelector(state => state.filters);

  const handleInputChange = useCallback(
    e => {
      const { name, value } = e.target;
      if (name === 'location') {
        dispatch(setLocation(value));
      } else if (name === 'vehicleType') {
        dispatch(setVehicleType(value));
      }
    },
    [dispatch]
  );

  const handleCheckboxChange = useCallback(
    e => {
      const { name } = e.target;
      dispatch(toggleEquipment(name));
    },
    [dispatch]
  );

  const handleSubmit = e => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (filters.location) params.append('location', filters.location);
    if (filters.vehicleType) params.append('vehicleType', filters.vehicleType);
    Object.keys(filters.equipment).forEach(key => {
      if (filters.equipment[key]) params.append(key, true);
    });
    navigate(`/catalog?${params.toString()}`);
    dispatch(setPage(1)); // Повернення на першу сторінку
  };

  const memoizedFilters = useMemo(() => filters, [
    filters.location,
    filters.vehicleType,
    filters.equipment,
  ]);

  return (
    <section className={css.sidebar}>
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.wrapperLocation}>
          <label htmlFor={locationId} className={css.labelLocation}>
            Location
          </label>
          <div className={css.wrapperInput}>
            <input
              className={css.inputLocation}
              type="text"
              name="location"
              id={locationId}
              value={memoizedFilters.location}
              onChange={handleInputChange}
            />
            <IconOption
              id="location"
              width={20}
              height={20}
              className={css.iconLocation}
            />
          </div>
        </div>
        <p className={css.text}>Filters</p>
        <VehicleKit />
        <VehicleType />
        <label>
          <input
            type="checkbox"
            name="ac"
            checked={memoizedFilters.equipment.ac}
            onChange={handleCheckboxChange}
          />
          AC
        </label>
        <label>
          <input
            type="checkbox"
            name="automatic"
            checked={memoizedFilters.equipment.automatic}
            onChange={handleCheckboxChange}
          />
          Automatic
        </label>
        <label>
          <input
            type="checkbox"
            name="kitchen"
            checked={memoizedFilters.equipment.kitchen}
            onChange={handleCheckboxChange}
          />
          Kitchen
        </label>
        <label>
          <input
            type="checkbox"
            name="tv"
            checked={memoizedFilters.equipment.tv}
            onChange={handleCheckboxChange}
          />
          TV
        </label>
        <label>
          <input
            type="checkbox"
            name="bathroom"
            checked={memoizedFilters.equipment.bathroom}
            onChange={handleCheckboxChange}
          />
          Bathroom
        </label>
        <Button type="submit" className={css.baseButton}>
          Search
        </Button>
      </form>
    </section>
  );
};

export default React.memo(SideBar);
