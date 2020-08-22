import React from "react";
import S from "./personalInfo.module.css";

var transformInfo = info => info.map((el) => {
    let fields = [];
    for (let key in el) {
        fields.push([key + ": " + el[key]]);
    }
    return fields;
})

var renderInfo = fields => fields.map((el) => {
    return <div key={el + 1}>{`${el}`}</div>
})

const PersonalInfo = (props) => {
    return (
        <div className={S.personalInfoContainer}>
            <div className={S.avatarWrapper}>
                <img src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"/>
            </div>
            <div className={S.infoList}>
                {renderInfo(transformInfo(props.info))}
            </div>
        </div>
    )
}
export default PersonalInfo;