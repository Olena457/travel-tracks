// import IconOptions from '../IconOptions/IconOptions.jsx';
// import css from './VehicleKit.module.css';

// const VehicleKit = () => {
//   return (
//     <div className={css.containerKit}>
//       <h4 className={css.title}>Vehicle equipment</h4>
//       <ul className={css.list}>
//         <li className={css.item}>
//           <label
//             className={css.label}
//             style={{
//               display: 'inline-flex',
//               alignItems: 'center',
//               cursor: 'pointer',
//             }}
//           >
//             <input
//               type="checkbox"
//               name="ac"
//               checked={isAC}
//               onChange={() => dispatch(toggleAC())}
//               id="ac"
//               style={{ display: 'none' }}
//               className={css.inputCheckbox}
//             />
//             <IconOptions
//               id="ac"
//               width={32}
//               height={32}
//               className={css.icon}
//               fillColor={'#101828'}
//             />
//             AC
//           </label>
//         </li>

//         <li className={css.item}>
//           <label
//             className={css.label}
//             style={{
//               display: 'inline-flex',
//               alignItems: 'center',
//               cursor: 'pointer',
//             }}
//           >
//             <input
//               type="checkbox"
//               name="kitchen"
//               checked={isKitchen}
//               onChange={() => dispatch(toggleKitchen())}
//               id="kitchen"
//               style={{ display: 'none' }}
//               className={css.inputCheckbox}
//             />
//             <IconOptions
//               id="kitchen"
//               width={32}
//               height={32}
//               className={css.icon}
//               fillColor={'#101828'}
//             />
//             Kitchen
//           </label>
//         </li>

//         <li className={css.item}>
//           <label
//             className={css.label}
//             style={{
//               display: 'inline-flex',
//               alignItems: 'center',
//               cursor: 'pointer',
//             }}
//           >
//             <input
//               type="checkbox"
//               name="transmission"
//               checked={isAutomatic}
//               onChange={() => dispatch(toggletransmission())}
//               id="transmission"
//               style={{ display: 'none' }}
//               className={css.inputCheckbox}
//             />
//             <IconOptions
//               id="transmission"
//               width={32}
//               height={32}
//               className={css.icon}
//               fillColor={'#101828'}
//             />
//             Automatic
//           </label>
//         </li>

//         <li className={css.item}>
//           <label
//             className={css.label}
//             style={{
//               display: 'inline-flex',
//               alignItems: 'center',
//               cursor: 'pointer',
//             }}
//           >
//             <input
//               type="checkbox"
//               name="tv"
//               checked={isTV}
//               onChange={() => dispatch(toggleTV())}
//               id="tv"
//               style={{ display: 'none' }}
//               className={css.inputCheckbox}
//             />
//             <IconOptions
//               id="tv"
//               width={32}
//               height={32}
//               className={css.icon}
//               fillColor={'#101828'}
//             />
//             TV
//           </label>
//         </li>
//         <li className={css.item}>
//           <label
//             className={css.label}
//             style={{
//               display: 'inline-flex',
//               alignItems: 'center',
//               cursor: 'pointer',
//             }}
//           >
//             <input
//               type="checkbox"
//               name="bathroom"
//               checked={isbathroom}
//               onChange={() => dispatch(togglebathroom())}
//               id="bathroom"
//               style={{ display: 'none' }}
//               className={css.inputCheckbox}
//             />
//             <IconOptions
//               id="bathroom"
//               width={32}
//               height={32}
//               className={css.icon}
//               fillColor={'#101828'}
//             />
//             bathroom
//           </label>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default VehicleKit;

import { useDispatch, useSelector } from 'react-redux';
import IconOptions from '../IconOptions/IconOptions.jsx';
import css from './VehicleKit.module.css';
import {
  toggleAC,
  toggleKitchen,
  toggleTransmission,
  toggleTV,
  toggleBathroom,
} from '../../redux/filters/filtersSlice.js';
import {
  selectAC,
  selectAutomatic,
  selectKitchen,
  selectBathroom,
  selectTV,
} from '../../redux/filters/filtersSelectors.js';

const VehicleKit = () => {
  const dispatch = useDispatch();
  const isAC = useSelector(selectAC);
  const isAutomatic = useSelector(selectAutomatic);
  const isKitchen = useSelector(selectKitchen);
  const isTV = useSelector(selectTV);
  const isBathroom = useSelector(selectBathroom);

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
              onChange={() => dispatch(toggleTransmission())}
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
              name="bathroom"
              checked={isBathroom}
              onChange={() => dispatch(toggleBathroom())}
              id="bathroom"
              style={{ display: 'none' }}
              className={css.inputCheckbox}
            />
            <IconOptions
              id="bathroom"
              width={32}
              height={32}
              className={css.icon}
              fillColor={'#101828'}
            />
            Bathroom
          </label>
        </li>
      </ul>
    </div>
  );
};

export default VehicleKit;
