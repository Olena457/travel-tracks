import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import clsx from 'clsx';
import IconOptions from '../IconOptions/IconOptions.jsx';

const BookSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  date: Yup.date().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  comment: Yup.string().min(5, 'Too short!').max(250, 'Too long!'),
});

const initialValues = {
  username: '',
  date: '',
  message: '',
  date: null,
};
const DatepickerField = ({ field, form, placeholder, ...props }) => {
  return (
    <DatePicker
      {...field}
      {...props}
      placeholderText={placeholder}
      selected={(field.value && new Date(field.value)) || null}
      onChange={value => {
        form.setFieldValue(field.name, value);
      }}
    />
  );
};
export const FormBook = () => {
  const nameField = useId();
  const dateField = useId();
  const messageField = useId();
  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };
  return (
    <div className={css.container}>
      <h4 className={css.title}>Book your campervan now</h4>
      <p className={css.description}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={BookSchema}
      >
        <Form>
          <div className={css.containerName}>
            <Field
              type="text"
              name="username"
              id={nameField}
              placeholder="Name*"
              className={clsx(user.name, css.field)}
            />
            <ErrorMessage name="username" component="p" className={css.error} />
          </div>

          <div className={css.containerEmail}>
            <Field
              type="email"
              name="email"
              id={emailField}
              placeholder="Email*"
              className={clsx(css.email, css.field)}
            />
            <ErrorMessage name="email" component="p" className={css.error} />
          </div>

          <div className={css.containerDate}>
            <label htmlFor={dateField}>
              <Field
                type="date"
                component={DatepickerField}
                name="date"
                id={dateField}
                placeholder="Booking date*"
                className={clsx(css.date, css.field)}
              />
              <IconOptions
                id="calendar"
                className={css.calendarIcon}
                width={16}
                height={16}
                fillColor="#fff"
              />
              <ErrorMessage name="date" component="p" className={css.error} />
            </label>
          </div>
          <div>
            <Field
              type="comment"
              name="comment"
              id={messageField}
              placeholder="Comment"
              className={clsx(css.comment, css.field)}
            />
            <ErrorMessage name="comment" component="p" className={css.error} />
          </div>
          <Button className={css.baseButton} type="submit">
            Send
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
// onClsck!!??
