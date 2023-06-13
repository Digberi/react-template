import { Button, Divider, LinearProgress, styled } from '@mui/material';
import { Formik, Form, Field, FormikValues, FormikErrors, FormikTouched } from 'formik';
import { TextField } from 'formik-mui';
import { object, string } from 'yup';

import { FieldSet } from './ui';

enum FormValues {
  email = 'email',
  password = 'password'
}

interface Values {
  [FormValues.email]: string;
  [FormValues.password]: string;
}

const getFieldProps = <U extends FormikValues>(
  errors: FormikErrors<U>,
  touched: FormikTouched<U>,
  name: keyof U
) => {
  return {
    name,
    error: Boolean(errors[name]) && Boolean(touched[name]),
    helperText: touched[name] && (errors[name] as string)
  };
};

const StyledForm = styled(Form)(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(2)
}));

export const TestForm = () => {
  return (
    <Formik<Values>
      initialValues={{
        [FormValues.email]: '',
        [FormValues.password]: ''
      }}
      validationSchema={object({
        [FormValues.email]: string().required().email(),
        [FormValues.password]: string().required()
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 5000);
      }}
    >
      {({ submitForm, isSubmitting, errors, touched }) => (
        <StyledForm>
          <FieldSet disabled={isSubmitting}>
            <Field
              type="email"
              label="Email"
              component={TextField}
              fullWidth
              variant="outlined"
              {...getFieldProps(errors, touched, FormValues.email)}
            />
            <Divider />
            <Field
              type="password"
              label="Password"
              component={TextField}
              fullWidth
              variant="outlined"
              {...getFieldProps(errors, touched, FormValues.password)}
            />
          </FieldSet>
          {isSubmitting && <LinearProgress />}
          <Divider />
          <Button variant="contained" color="primary" disabled={isSubmitting} onClick={submitForm}>
            Submit
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};
