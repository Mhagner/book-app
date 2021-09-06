import React from 'react'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import * as yup from 'yup'

import './AuthForm.css'
import Logo from '../Logo/Logo'


const AuthForm = ({ handleSubmit, errors }) => {
   
    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })

    return (
        <div data-testid="auth-form" className="auth-form__container">
            <Logo />
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="auth-form__form">
                    <div className="auth-form__box-field">
                        <label>Email</label>
                        <Field
                            data-testid="auth-input-email"
                            name="email"
                            className="auth-form__field"
                        />
                        <ErrorMessage
                            data-testid="auth-msg-error-email"
                            component="span"
                            name="email"
                            className="auth-form__error"
                        />
                    </div>
                    <div className="auth-form__box-field">
                        <label>Senha</label>
                        <Field
                            data-testid="auth-input-password"
                            name="password"
                            className="auth-form__field"
                            type="password"
                        />
                        <ErrorMessage
                            data-testid="auth-msg-error-password"
                            component="span"
                            name="password"
                            className="auth-form__error"
                        />
                        <button
                            data-testid="auth-button-submit"
                            className="auth-form__button"
                            type="submit"
                        >
                            Entrar
                        </button>
                        {errors &&
                            <span className="error-backend">{errors}</span>
                        }
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default AuthForm