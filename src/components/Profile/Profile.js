import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import S from "./profile.module.css"
import StoreContext from "../../Store_Context";

const Profile = (props) => {
    return (
        <div className={S.profileContent}>
            <StoreContext.Consumer>
                {
                    (store) =>{
                        return (<div>
                            <ProfileInfo info={store.getState().profilePage.info}/>
                            <MyPosts/>
                        </div>)
                    }
                }
            </StoreContext.Consumer>

        </div>
    )
}
export default Profile;
