import React, {Component} from 'react'

class ProfileStatus extends Component {
    state = {
        editMode: false,
        status:this.props.status
    }

    activateEditMode = ()=> {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () =>{
        this.setState({
            editMode: false
        })
        this.props.updateProfileStatus(this.state.status)
    }
    onInputChange = (e) => {
        debugger
        this.setState({
            status:e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.status!==this.props.status) {
            this.setState({
                status:this.props.status
            })
        }

    }
    render() {
        return (
            <div>
                {(this.state.editMode) ?
                    <input onChange = {this.onInputChange} autoFocus= {true} value = {this.state.status} onBlur={this.deactivateEditMode}/>
                    : <span  onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                }
            </div>
        )
    }

}

export default ProfileStatus