import { ClimbingBoxLoader } from 'react-spinners';

import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <ClimbingBoxLoader color="#36bed6" size={40} />
    </div>
  );
};
export default Loader;
