import IconOptions from '../IconOptions/IconOptions.jsx';
import css from './VehicleKit.module.css';

const VehicleKit = () => {
  return (
    <div className={css.containerKit}>
      <h4 className={css.title}>Vehicle equipment</h4>
      <ul className={css.list}>
        <li className={css.item}>
          <label
            className={css.label}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <input
              type="checkbox"
              name="ac"
              checked={isAC}
              onChange={() => dispatch(toggleAC())}
              id="ac"
              style={{ display: 'none' }}
              className={css.inputCheckbox}
            />
            <IconOptions
              id="ac"
              width={32}
              height={32}
              className={css.icon}
              fillColor={'#101828'}
            />
            AC
          </label>
        </li>

        <li className={css.item}>
          <label
            className={css.label}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <input
              type="checkbox"
              name="kitchen"
              checked={isKitchen}
              onChange={() => dispatch(toggleKitchen())}
              id="kitchen"
              style={{ display: 'none' }}
              className={css.inputCheckbox}
            />
            <IconOptions
              id="kitchen"
              width={32}
              height={32}
              className={css.icon}
              fillColor={'#101828'}
            />
            Kitchen
          </label>
        </li>

        <li className={css.item}>
          <label
            className={css.label}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <input
              type="checkbox"
              name="transmission"
              checked={isAutomatic}
              onChange={() => dispatch(toggletransmission())}
              id="transmission"
              style={{ display: 'none' }}
              className={css.inputCheckbox}
            />
            <IconOptions
              id="transmission"
              width={32}
              height={32}
              className={css.icon}
              fillColor={'#101828'}
            />
            Automatic
          </label>
        </li>

        <li className={css.item}>
          <label
            className={css.label}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <input
              type="checkbox"
              name="tv"
              checked={isTV}
              onChange={() => dispatch(toggleTV())}
              id="tv"
              style={{ display: 'none' }}
              className={css.inputCheckbox}
            />
            <IconOptions
              id="tv"
              width={32}
              height={32}
              className={css.icon}
              fillColor={'#101828'}
            />
            TV
          </label>
        </li>
        <li className={css.item}>
          <label
            className={css.label}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <input
              type="checkbox"
              name="shower"
              checked={isShower}
              onChange={() => dispatch(toggleShower())}
              id="shower"
              style={{ display: 'none' }}
              className={css.inputCheckbox}
            />
            <IconOptions
              id="shower"
              width={32}
              height={32}
              className={css.icon}
              fillColor={'#101828'}
            />
            Shower
          </label>
        </li>
      </ul>
    </div>
  );
};

export default VehicleKit;
