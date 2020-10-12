import React, {Component} from 'react'

let ProfileStatus = (props) => {

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
    let onInputChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {(editMode) ?
                <input onChange={onInputChange} autoFocus={true} value={status} onBlur={deactivateEditMode}/>
                : <span onDoubleClick={activateEditMode}>{props.status}</span>
            }
        </div>
    )
}

export default ProfileStatus