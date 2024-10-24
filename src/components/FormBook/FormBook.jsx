import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import css from './FormBook.module.css';

function FormBook(data) {
  const initial = {
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  };

  function submitHandler(values) {
    actions.resetForm();
    toast.success('The order was successfully created');
  }

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    bookingDate: Yup.date()
      .required(' Date is required')
      .min(tomorrow)
      .nullable(),
    comment: Yup.string().max(
      200,
      ' The comment should be no more than 200 characters'
    ),
  });

  return (
    <Formik
      initialValues={initial}
      onSubmit={submitHandler}
      validationSchema={validationSchema}
    >
      {({ setFieldValue }) => (
        <Form className={css.formContainer}>
          <h3 className={css.title}>Book your campervan now</h3>
          <p className={css.description}>
            Stay connected! We are always ready to help you.
          </p>
          <div className={css.inputBox}>
            <Field
              className={css.input}
              name="name"
              placeholder="Name*"
            ></Field>
            <ErrorMessage name="name" component="span" className={css.error} />
            <Field
              className={css.input}
              name="email"
              placeholder="Email*"
            ></Field>
            <ErrorMessage name="email" component="span" className={css.error} />
            <div className={css.datePicker}>
              <Field name="bookingDate">
                {({ field }) => (
                  <DatePicker
                    {...field}
                    selected={field.value ? new Date(field.value) : null}
                    onChange={date => setFieldValue('bookingDate', date)}
                    placeholderText="Booking date*"
                    dateFormat="dd/MM/yyyy"
                    className={css.input}
                  />
                )}
              </Field>
              <ErrorMessage
                name="bookingDate"
                component="span"
                className={css.error}
              />
            </div>
            <Field
              className={css.comment}
              name="comment"
              as="textarea"
              placeholder="Comment"
            ></Field>
            <ErrorMessage
              name="comment"
              component="span"
              className={css.error}
            />
          </div>

          <button className={css.btnSend} type="submit">
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormBook;
