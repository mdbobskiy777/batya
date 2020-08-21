import React from "react";
import S from "./addNewPostMenu.module.css";

const AddNewPostMenu = (props) => {

    let OnAddPost = () => {
        let action = {type: "ADD_POST"};
        props.dispatch(action);
    }

    let onUpdateNewPostText = (e) => {
        let action = {type: "UPDATE_POST_TEXT", text: e.target.value};
        props.dispatch(action);
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