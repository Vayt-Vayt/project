import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "../redux/reducer_profilePage";
import { AuthRedirectComponent } from "../hoc/Redirect";
import { withRouter } from "../hoc/WithRouter";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  /*   constructor(props) {
    super(props)
  } */
  componentDidMount() {
    let userId = this.props.router.params.id;
    if (!userId) {
      userId = 25034;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

// const RedirectComponent = AuthRedirectComponent(ProfileContainer)
// const WithUrlDataContainerComponent = withRouter(RedirectComponent)

const mapStateToProps = (state) => ({
  profile: state.profilePageReducer.profile,
});

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  AuthRedirectComponent
)(ProfileContainer);
