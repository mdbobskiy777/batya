import React from "react";
import S from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={S.post}>
            <img src={"https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"}/>
            <div>
                {props.message}
            </div>
            <div>
                <span>
                    {props.likesNumber}
                </span>
            </div>
        </div>
    );
}
export default Post;