import React, {Component} from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {set_info, set_new_post_text, set_posts_list} from "../../Reducers/profile_reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger
        let usersId = (this.props.match.params.userId)?this.props.match.params.userId:0;
        debugger
        axios
            .get(`http://localhost:3001/profile?id=${usersId}`)
            .then(response => {
                debugger
                this.props.set_info(response.data.profile.info);
                this.props.set_posts_list(response.data.profile.postsList);
                this.props.set_new_post_text(response.data.profile.newPostText);
            });
    }

    render() {
        debugger
        return <Profile {...this.props} />
    }
}
let mapStateToProps = (state) =>({

})

let withRouteContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps,{set_info,set_posts_list,set_new_post_text})( withRouteContainer);
