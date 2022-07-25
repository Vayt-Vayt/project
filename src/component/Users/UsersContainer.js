import React from "react";
import Users from "./Users";
import { connect } from 'react-redux';
import { follow, getUsers, setCurrentPage, toggleIsFollowingProgress, unFollow } from '../redux/reducer_Users';
import Loader from "../common/PreLoader/Loader";
import { compose } from "redux";
import { AuthRedirectComponent } from "../hoc/Redirect";

class UsersContainer extends React.Component {
    /*   constructor(props) {
      super(props)
    } */
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
    };
    render() {
        const pagesCount = Math.ceil(
            this.props.totalUserCount / this.props.pageSize
        );

        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        let curP = this.props.currentPage;
        let curPF = curP - 5 < 0 ? 0 : curP - 5;
        let curPL = curP + 5;
        let slicedPages = pages.slice(curPF, curPL);

        return (
            <>
                {this.props.isFetching && <Loader />}
                <Users
                    slicedPages={slicedPages}
                    onPageChanged={this.onPageChanged}
                    currentPage={curP}
                    unFollow={this.props.unFollow}
                    follow={this.props.follow}
                    users={this.props.users}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
}



const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
})

const dispatch = {
    follow,
    unFollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsers,
}

export default compose(
    connect(mapStateToProps, dispatch),
    AuthRedirectComponent
)(UsersContainer)

