import React from "react";
import Users from "./Users";
import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalCount, setUsers, toggleIsFetching, unFollow } from '../redux/reducer_Users';
import Loader from "../common/PreLoader/Loader";
import { userAPI } from "../api/api";

class UsersContainer extends React.Component {
    /*   constructor(props) {
      super(props)
    } */
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true)
            userAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount);

            });
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        userAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        });
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
                    selectedPage={this.props.selectedPage}
                    unFollow={this.props.unFollow}
                    follow={this.props.follow}
                    users={this.props.users}
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
    isFetching: state.usersPage.isFetching
})


const dispatch = {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleIsFetching,
}

export default connect(mapStateToProps, dispatch)(UsersContainer)

