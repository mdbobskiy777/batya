import React from "react";
import S from "./addNewPostMenu.module.css";

const AddNewPostMenu = (props) => {

    let OnAddPost = () => {
        props.addPost();
    }

    let onUpdateNewPostText = (e) => {
        props.updateNewPostText(e.target.value);
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