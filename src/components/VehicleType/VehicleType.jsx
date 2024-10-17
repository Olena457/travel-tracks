import { useDispatch, useSelector } from 'react-redux';
import IconOptions from '../IconOptions/IconOptions.jsx';
import css from './VehicleType.module.css';
import { setVehicleType } from '../../redux/filters/filtersSlice';
import { selectVehicleType } from '../../redux/filters/filtersSelectors';
import clsx from 'clsx';
const VehicleType = () => {
  const dispatch = useDispatch();
  const type = useSelector(selectVehicleType);

  const handleChange = e => {
    dispatch(setVehicleType(e.target.value));

    return (
      <div className={css.containerType}>
        <h4 className={css.title}>Vehicle type</h4>
        <ul className={css.list}>
          <li
            className={css.item}
            style={{
              border:
                type === 'panelTruck'
                  ? '1px solid #e44848'
                  : '1px solid  #dadde1',
            }}
          >
            <label
              className={css.label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <input
                type="radio"
                name="type"
                value="panelTrukc"
                checked={type === 'panelTruck'}
                id="panelTruck"
                style={{ display: 'none' }}
                onChange={handleChange}
              />{' '}
              <IconOptions
                id="camper-window"
                width={40}
                height={28}
                className={css.icon}
                fillColor={'#101828'}
              />
              Van
            </label>
          </li>
          <li
            className={css.item}
            style={{
              border:
                type === 'fullyIntegrated'
                  ? '1px solid #e44848'
                  : '1px solid #dadde1',
            }}
          >
            <label
              className={(clsx(css.label), css.door)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <input
                type="radio"
                name="vehicletype"
                value="fullyIntegrated"
                checked={type === 'fullyIntegrated'}
                id="fullyIntegrated"
                style={{ display: 'none' }}
                onChange={handleChange}
              />
              <IconOptions
                id="camper-door"
                width={40}
                height={28}
                className={css.icon}
                fillColor={'#101828'}
              />
              Fully Integrated
            </label>
          </li>

          <li
            className={css.item}
            style={{
              border:
                type === 'alcove' ? '1px solid #e44848' : '1px solid  #dadde1',
            }}
          >
            <label
              className={css.label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <input
                type="radio"
                name="vehicletype"
                value="alcove"
                checked={type === 'alcove'}
                id="alcove"
                style={{ display: 'none' }}
                onChange={handleChange}
              />{' '}
              <IconOptions
                id="camper-full"
                width={40}
                height={28}
                className={css.icon}
                fillColor={'#101828'}
              />
              Alcove
            </label>
          </li>
        </ul>
      </div>
    );
  };
};

export default VehicleType;
