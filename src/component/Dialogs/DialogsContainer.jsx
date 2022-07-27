import { connect } from "react-redux";
import { compose } from "redux";
import { AuthRedirectComponent } from "../hoc/Redirect";
import { upduteNewMessegeBodyCeator } from "../redux/reducer_messagePage";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => ({
  dialogsData: state.messagePageReducer.dialogsData,
  messageData: state.messagePageReducer.messageData,
  newMessageBody: state.messagePageReducer.newMessageBody,
});


export default compose(
  connect(mapStateToProps, { upduteNewMessegeBodyCeator }),
  AuthRedirectComponent
)(Dialogs);
