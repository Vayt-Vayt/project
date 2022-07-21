import { connect } from 'react-redux';
import { followAC, setUsersAC, unFollowAC } from '../redux/reducer_Users';
import Users from './Users';

const mapStateToProps = (state) => ({
    users: state.usersPage.users
})

const mapDispatchToProps = (dispatch) => ({
    follow: (id) => dispatch(followAC(id)),
    unFollow: (id) => dispatch(unFollowAC(id)),
    setUsers: (users) => dispatch(setUsersAC(users)),
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;