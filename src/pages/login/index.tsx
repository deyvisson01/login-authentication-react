import React from 'react';
import './styles.css';

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { history } from '../../history'

const Login = () => {

  const handleSubmit = (values: any) => {
    axios.post('http://localhost:8080/v1/api/auth', values)
      .then(resp => {
        const { data } = resp
        if (data) {
          localStorage.setItem('app-token', data)
          history.push('/home')
        }
      })
  }

  const validations = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().min(8).required()
  })

  return (
    <div className="body">
      <div className="user-login card card-1">
        <h1 className="user-login__title">Login</h1>

        <Formik
          initialValues={{}}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          <Form className="Login">
            <div className="inputs-section">
              <div className="user-login__form-control">
                <Field
                  name="email"
                  className="Login-Field"
                />
                <ErrorMessage
                  component="span"
                  name="email"
                  className="Login-Error"
                />
              </div>
              <div className="user-login__form-control">
                <Field
                  name="password"
                  className="Login-Field"
                />
                <ErrorMessage
                  component="span"
                  name="password"
                  className="Login-Error"
                />
              </div>
            </div>
              
            <div className="button-section">
              <button className="ui-button ui-button--bordered-green ui-button--contained-green" type="submit">Entrar</button>
            </div>
            
          </Form>
        </Formik>
            <div className="button-section">
              <button className="ui-button ui-button--bordered-green ui-button--contained-green" > Cadastro </button>
            </div>
        
      </div>
    </div>
  );
};

export default Login;