import React from "react"
import Style from "./profileDesc.module.css"

const Contact = ({contactTitle, contactValue}) => {
    return <div className={Style.contacts}><b>{contactTitle}:</b>{contactValue}</div>
}

let ProfileDesc = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <button onClick={goToEditMode}>edit</button>}
        <div><b>full name :</b>{profile.fullName}</div>
        <div><b>looking for a job:{profile.lookingForAJob ? "yes" : "no"} </b></div>
        {profile.lookingForAJob &&
        <div><b>my personal skills : </b>{profile.lookingForAJobDescription}</div>}
        <div><b>about me: </b>{profile.aboutMe}</div>
        <div><b>contacts: </b></div>
        {Object.keys(profile.contacts).map((key, i) => <Contact key={i} contactTitle={key}
                                                                contactValue={profile.contacts[key]}/>)}
    </div>
}
export default ProfileDesc