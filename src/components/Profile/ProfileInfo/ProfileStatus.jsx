import React from 'react'
import Style from "./profileStatus.module.css"

let ProfileStatus = props => {
    let [editMode, setEditMode] = React.useState(false)
    let [status, setStatus] = React.useState(props.status)
    React.useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let activateEditMode = () => {
        setEditMode(true)
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateProfileStatus(status)
    }
    let onInputChange = e => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={Style.statusContentContainer}>
            {(editMode) ?
                <input onChange={onInputChange} autoFocus={true} value={status} onBlur={deactivateEditMode}/>
                : <span className = {Style.statusContent} onDoubleClick={activateEditMode}>{props.status}</span>
            }
        </div>
    )
}

export default ProfileStatus