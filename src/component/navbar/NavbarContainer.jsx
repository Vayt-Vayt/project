import { connect } from 'react-redux';
import Navbar from './Navbar';


const mapStateToProps = (state) => ({
  myfriends: state.sadebarReducer.myfriends
})

const mapDispatchToProps = (dispatch) => ({

})



const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)
 


export default NavbarContainer;