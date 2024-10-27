import css from './SideBarForm.module.css';
import { Form, Field, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { changeFilter, changePage, clearItems } from '../../redux/slice.js';
import { selectFilters } from '../../redux/selectors.js';
import Icon from '../Icon.jsx';

function SideBarForm() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const initialValues = {
    location: filters.location,
    equipment: filters.equipment,
    form: filters.form,
  };

  function submitHandler(values) {
    dispatch(clearItems());
    dispatch(changePage(1));
    dispatch(changeFilter({ ...values, location: values.location.trim() }));
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      enableReinitialize
    >
      <Form>
        <div className={css.locationBox}>
          <label className={css.locLabel} htmlFor="location">
            Location
          </label>
          <Field
            className={css.locationInput}
            id="location"
            name="location"
            placeholder="City"
          />
          <Icon cl={css.mapIcon} id="icon-map" width="20" height="20" />
        </div>
        <p className={css.filterTitle}>Filters</p>
        <div>
          <h3 className={css.vehTitle}>Vehicle equipment</h3>
          <div className={css.filterGroup}>
            <label className={css.label}>
              <Field
                type="checkbox"
                name="equipment"
                value="AC"
                className={css.checkbox}
              />
              <Icon cl={css.icon} id="icon-wind" width="32" height="28" />
              <p>AC</p>
            </label>
            <label className={css.label}>
              <Field
                type="checkbox"
                name="equipment"
                value="Automatic"
                className={css.checkbox}
              />
              <Icon cl={css.icon} id="icon-diagram" width="32" height="28" />
              <p>Automatic</p>
            </label>
            <label className={css.label}>
              <Field
                type="checkbox"
                name="equipment"
                value="Kitchen"
                className={css.checkbox}
              />
              <Icon cl={css.icon} id="icon-cup" width="32" height="28" />
              <p>Kitchen</p>
            </label>
            <label className={css.label}>
              <Field
                type="checkbox"
                name="equipment"
                value="TV"
                className={css.checkbox}
              />
              <Icon cl={css.icon} id="icon-tv" width="32" height="28" />
              <p>TV</p>
            </label>
            <label className={css.label}>
              <Field
                type="checkbox"
                name="equipment"
                value="Bathroom"
                className={css.checkbox}
              />
              <Icon cl={css.icon} id="icon-droplet" width="32" height="28" />
              <p>Bathroom</p>
            </label>
          </div>
        </div>
        <div>
          <h4 className={css.radioTitle}>Vehicle type</h4>
          <div className={css.radioGroup}>
            <label className={css.radioLabel}>
              <Field
                className={css.radio}
                type="radio"
                name="form"
                value="can"
              />
              <Icon cl={css.icon} id="icon-1x2" width="32" height="32" />
              <p>Van</p>
            </label>
            <label className={css.radioLabel}>
              <Field
                className={css.radio}
                type="radio"
                name="form"
                value="fullyIntegrated"
              />
              <Icon cl={css.icon} id="icon-2x2" width="32" height="32" />
              <p>
                Fully
                <br />
                Integrated
              </p>
            </label>
            <label className={css.radioLabel}>
              <Field
                className={css.radio}
                type="radio"
                name="form"
                value="alcove"
              />
              <Icon cl={css.icon} id="icon-3x3" width="32" height="32" />
              <p>Alcove</p>
            </label>
          </div>
        </div>
        <button className={css.btnSearch} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
}

export default SideBarForm;
