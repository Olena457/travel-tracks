import IconOptions from './../IconOptions/IconOptions.jsx';
import css from './CamperItemOption.module.css';

export const CamperItemOptions = ({ item }) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <IconOptions
          id="refrigerator"
          width={20}
          height={20}
          className={css.icon}
          fillColor={'#101828'}
        />
        Refrigerator
      </li>

      <li className={css.item}>
        <IconOptions
          id="transmission"
          width={20}
          height={20}
          className={css.icon}
          fillColor={'#101828'}
        />
        {item.transmission.charAt(0).toUpperCase() +
          item.transmission.slice(1).toLowerCase()}
      </li>

      <li className={css.item}>
        <IconOptions
          id="gas"
          width={20}
          height={20}
          className={css.icon}
          fillColor={'#101828'}
        />
        Gas
      </li>

      {item.details.kitchen != 0 && (
        <li className={css.item}>
          <IconOptions
            id="kitchen"
            width={20}
            height={20}
            className={css.icon}
            fillColor={'#101828'}
          />
          Kitchen
        </li>
      )}

      <li className={css.item}>
        <IconOptions
          id="bathroom"
          width={20}
          height={20}
          className={css.icon}
          fillColor={'#101828'}
        />
        Bathroom
      </li>

      {item.details.airConditioner != 0 && (
        <li className={css.item}>
          <IconOptions
            id="AC"
            width={20}
            height={20}
            className={css.icon}
            fillColor={'#101828'}
          />
          AC
        </li>
      )}
    </ul>
  );
};
