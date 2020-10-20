import React from "react"
import {Field, Form} from "react-final-form";
import FormControlsCreator from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {requiredField} from "../../utils/validators/validators";
import s from "../common/FormsControls/formsControl.module.css"

let Input = FormControlsCreator('input')
let Password = FormControlsCreator('input')

const Login = props => {
    if (props.isAuth === true) return <Redirect to={'/profile'}/>
    return (
        <Form onSubmit={(form) => {
            props.login({
                email: form.email,
                password: form.password,
                rememberMe: form.rememberMe
            });
        }}
              render={({submitError = props.submitError, handleSubmit, form}) => (
                  <form onSubmit={handleSubmit}>
                      <div>
                          <Field validate={requiredField} name="email" component={Input} placeholder="login"/>
                      </div>
                      <div>
                          <Field validate={requiredField} name="password"
                                 component={Password} type={'password'} placeholder="password"/>
                      </div>
                      <div>
                          <Field name="rememberMe" component='input' type="checkbox"/>
                      </div>
                      <div>
                          <button type="Submit">Submit</button>
                      </div>
                      {(submitError !== '') ? <div className={s.submitError}>{submitError}</div> : null}
                  </form>
              )}
        >
        </Form>
    )
}
let mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    submitError: state.auth.submitError

})
export default connect(mapStateToProps, {login})(Login)