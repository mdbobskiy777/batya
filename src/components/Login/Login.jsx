import React from "react"
import {Field, Form} from "react-final-form";
import FormControlsCreator from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {requiredField} from "../../utils/validators/validators";


let Input = FormControlsCreator('input')
let Password = FormControlsCreator('input')
const Login = (props) => {
    if (props.isAuth === true) return <Redirect to={'/profile'}/>
    return (
        <Form onSubmit={(form) => {
            props.login({email: form.email,
                password: form.password,
                rememberMe: form.rememberMe});
        }}
              validate={() => {
              }}
              render={({handleSubmit, form}) => (
                  <form onSubmit={handleSubmit}>
                      <div>
                          <Field validate={requiredField} name="email" component={Input} placeholder="login"/>
                      </div>
                      <div>
                          <Field validate = {requiredField} name="password" component={Password} type={'password'} placeholder="password"/>
                      </div>
                      <div>
                          <Field name="rememberMe" component='input' type="checkbox"/>
                      </div>
                      <div>
                          <button type="Submit">Submit</button>
                      </div>
                  </form>

              )}
        >
        </Form>
    )
}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)