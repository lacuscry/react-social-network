import Messages from './Messages';
import {sendMessage, changeCurrentTextMessage} from '../../../Redux/dialogs-reducer';
import {connect} from 'react-redux';


function mapStateToProps(state){
	return{
		state: state.dialogsPage
	};
}


const MessagesContainer = connect(mapStateToProps, {sendMessage, changeCurrentTextMessage})(Messages);


export default MessagesContainer;