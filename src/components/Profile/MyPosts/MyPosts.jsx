import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, Form} from "react-final-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import FormControlsCreator from "../../common/FormsControls/FormsControls";

let Textarea = FormControlsCreator('textarea');
let maxLength10 = maxLengthCreator(10);

const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

let AddNewPostForm = props => (
    <Form onSubmit={props.onSubmit} validate={() => {
    }}
          render={({handleSubmit, form}) => (
              <div>
                  <form onSubmit={e => {
                      handleSubmit(e)
                      form.restart()
                  }
                  }>
                      <div>
                          <Field validate={composeValidators(requiredField, maxLength10)} name="newPostText"
                                 component={Textarea} placeholder="Write new post"/>
                      </div>
                      <div>
                          <button type={"Submit"}>Submit</button>
                      </div>
                  </form>
              </div>

          )}
    />
)
const MyPosts = props => {

    let onSubmit = obj => props.addPostActionCreator(obj.newPostText)
    let postsElements = props.posts.map((p, i) => <Post deletePost={props.deletePost}
                                                        id={p.id}
                                                        key={i} message={p.message}
                                                        likesCount={p.likesCount}/>);
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddNewPostForm onSubmit={onSubmit}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;