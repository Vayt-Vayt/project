import { connect } from "react-redux";
import {
  sendMessegeCeator,
  upduteNewMessegeBodyCeator,
} from "../redux/reducer_messagePage";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => ({
  dialogsData: state.messagePageReducer.dialogsData,
  messageData: state.messagePageReducer.messageData
});

const mapDispatchToProps = (dispatch) => ({
  upduteNewMessegeBody: () => {
    dispatch(upduteNewMessegeBodyCeator());
  },
  sendMessege: (body) => {
    dispatch(sendMessegeCeator(body));
  },
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
