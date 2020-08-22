import React from "react";
import S from "./addNewPostMenu.module.css";
import {add_post} from "../../../../Reducers/profile_reducer";
import {update_post} from "../../../../Reducers/profile_reducer";



const AddNewPostMenu = (props) => {

    let OnAddPost = () => {
        props.dispatch(add_post());
    }

    let onUpdateNewPostText = (e) => {
        props.dispatch(update_post(e.target.value));
    }
    return (
        <div>
            <div>
                <textarea onChange={onUpdateNewPostText} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={OnAddPost}>Add post</button>
            </div>

        </div>
    )

}
export default AddNewPostMenu;