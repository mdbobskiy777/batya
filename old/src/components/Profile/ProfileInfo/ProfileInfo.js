import React from "react";
import S from "./ProfileInfo.module.css";
import PersonalInfo from "./personalInfo/personalInfo";

const ProfileInfo = (props) => {
    return (
        <div>
            <div className = {S.imageWrapper}>
                <img src={"https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"}/>
            </div>
            <div>
                <PersonalInfo info = {props.info}/>
            </div>
        </div>
    )
}
export default ProfileInfo;