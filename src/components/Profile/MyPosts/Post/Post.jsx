import React from 'react';
import s from './Post.module.css';
import avatarImage from "../../../../assets/images/MyAvatar.jpg"

const Post = props => {

    let onDeleteHandler = () => props.deletePost(props.id)
    return (
        <div className={s.post}>
            <div>
                <img src={avatarImage} alt="avatarLogo"/>
                <div>
                    <div>{props.message}</div>
                </div>
                <div>likes {props.likesCount}
                </div>
            </div>
            <div onClick={() => {
                onDeleteHandler()
            }} className={s.deletePost}>x
            </div>
        </div>
    )
}

export default Post;