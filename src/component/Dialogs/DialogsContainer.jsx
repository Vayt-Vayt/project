import { connect } from "react-redux";
import { compose } from "redux";
import { AuthRedirectComponent } from "../hoc/Redirect";
import {
  sendMessegeCeator,
  upduteNewMessegeBodyCeator,
} from "../redux/reducer_messagePage";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => ({
  dialogsData: state.messagePageReducer.dialogsData,
  messageData: state.messagePageReducer.messageData,
  newMessageBody: state.messagePageReducer.newMessageBody,
});

// const RedirectDialogs = AuthRedirectComponent(Dialogs)

// const DialogsContainer = connect(mapStateToProps, { sendMessegeCeator, upduteNewMessegeBodyCeator })(RedirectDialogs);

export default compose(
  connect(mapStateToProps, { sendMessegeCeator, upduteNewMessegeBodyCeator }),
  AuthRedirectComponent
)(Dialogs);
