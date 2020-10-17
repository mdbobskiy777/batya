import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    let onDeleteHandler = ()=>{
        props.deletePost(props.id)
    }
    return (
        <div className={s.post}>
            <div>
                <img src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"/>
                <div>
                    <div>{props.message}</div>
                </div>
                <div>likes {props.likesCount}
                </div>
            </div>
            <div onClick={()=>{onDeleteHandler()}} className = {s.deletePost}>x</div>
        </div>
    )
}

export default Post;