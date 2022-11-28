import { Form, Formik } from 'formik';

const FormikForm = ({ children, className, initialValues, validationSchema }) => {
	return (
		<div className={className}>
			<Formik initialValues={initialValues} validationSchema={validationSchema}>
				{(formik) => (
					<Form className='flex justify-center items-center flex-col my-[50px]'>
						{children}
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default FormikForm;
