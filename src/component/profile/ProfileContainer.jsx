import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {setUserProfile }from '../redux/reducer_profilePage'
import { useLocation, useNavigate, useParams } from "react-router-dom";
class ProfileContainer extends React.Component {
/*   constructor(props) {
    super(props)
  } */
  componentDidMount() {
    let userId = this.props.router.params.id;
    if (!userId) {
      userId = 25034
    }
    axios.get(
      `https://social-network.samuraijs.com/api/1.0/profile/${userId}`,
      {withCredentials: true}
  )
      .then((response) => {
          this.props.setUserProfile(response.data)
      });
  
  } 

  render() {
    return (
      <Profile {...this.props}  profile={this.props.profile} />
    );
  }
  
};

const mapStateToProps = (state) => ({
  profile: state.profilePageReducer.profile
}) 

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
