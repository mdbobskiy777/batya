import {Field, Form} from "react-final-form";
import {requiredField} from "../../../utils/validators/validators";
import s from "./ProfileInfo.module.css";
import React from "react";

let ProfileDescForm = ({profile, onSubmit, submitErrorProf}) => {
    debugger
    let editContacts = (profile) => {
        let contacts = {...profile.contacts}
        return Object.keys(contacts).map((e, i) => <div key={i}>
            <Field validate={requiredField} name={"contacts." + e}
                   component={"input"} placeholder={e}/>
        </div>)
    }
    return (
        <Form initialValues={{
            ...profile
        }} onSubmit={(form) => {
            debugger
            onSubmit(form)
        }}
              render={({submitError = submitErrorProf, handleSubmit, form}) => (
                  <form onSubmit={handleSubmit}>
                      <div>
                          <span><b>full name: </b></span>
                          <Field validate={requiredField} name="fullName"
                                 component={"input"} placeholder="full name"/>
                      </div>
                      <div>
                          <span><b>looking for a job: </b></span>
                          <Field name="lookingForAJob" component='input' type="checkbox"/>
                      </div>
                      <div>
                          <div><b>my professional skills: </b></div>
                          <Field validate={requiredField} name="lookingForAJobDescription"
                                 component={"textarea"} placeholder="my professional skills"/>
                      </div>
                      <div>
                          <span><b>about me: </b></span>
                          <Field validate={requiredField} name="aboutMe"
                                 component={"input"} placeholder="about me"/>
                      </div>
                      {editContacts(profile)}
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
export default ProfileDescForm