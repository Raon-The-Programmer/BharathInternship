import { ErrorMessage,Field, Form, Formik } from 'formik'
import React from 'react'
function ContactForm(){
  return(
    <Formik initialValues={{name:'',email:'',message:''}}>
      <Form>
        <div>
          <label htmlFor='name'>Name</label>
          <Field type='text' name='name'></Field>
          <ErrorMessage name='name' component='div'></ErrorMessage>
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <Field type='email' name='email'></Field>
          <ErrorMessage name='email' component='div'></ErrorMessage>
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <Field as='textarea' name='message'></Field>
          <ErrorMessage name='message' component='div'></ErrorMessage>
        </div>
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}
const App = () => {
  return (
    <div>
      <ContactForm />
    </div>
  )
}

export default App