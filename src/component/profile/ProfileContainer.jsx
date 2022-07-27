import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getStatus, getUserProfile, updateStatus } from "../redux/reducer_profilePage";
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
    this.props.getStatus(userId)
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePageReducer.profile,
  status: state.profilePageReducer.status,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  // AuthRedirectComponent
)(ProfileContainer);
