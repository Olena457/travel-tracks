import css from './FeaturesItem.module.css';
import IconOptions from '../IconOptions/IconOptions.jsx';

function FeaturesItem({ item }) {
  return (
    <div className={css.wraperItem}>
      <ul className={css.list}>
        {item.details.radio != 0 && (
          <li className={css.item}>
            <IconOptions
              id="radio"
              width={20}
              height={20}
              className={css.icon}
              fillColor={'#101828'}
            />
            Radio
          </li>
        )}
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
        {item.details.bathroom != 0 && (
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
        )}
        {item.details.TV != 0 && (
          <li className={css.item}>
            <IconOptions
              id="TV"
              width={20}
              height={20}
              className={css.icon}
              fillColor={'#101828'}
            />
            TV
          </li>
        )}
        {item.details.transmission != 0 && (
          <li className={css.item}>
            <IconOptions
              id="transmission"
              width={20}
              height={20}
              className={css.icon}
              fillColor={'#101828'}
            />
            {item.details.transmission}
          </li>
        )}
        {item.details.gas != 0 && (
          <li className={css.item}>
            <IconOptions
              id="gas"
              width={20}
              height={20}
              className={css.icon}
              fillColor={'#101828'}
            />
            gas
          </li>
        )}
      </ul>
    </div>
  );
}

export default FeaturesItem;
