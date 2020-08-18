import React from "react";
import S from "./addNewPostMenu.module.css";

const AddNewPostMenu = (props) => {
    let newPostText = React.createRef();

    let OnAddPost = () => {
        let text = newPostText;
        props.addPost(text.current.value);
    }

    return (
        <div>
            <div>
                <textarea ref={newPostText}/>
            </div>
            <div>
                <button onClick={OnAddPost}>Add post</button>
            </div>

        </div>
    )

}
export default AddNewPostMenu;