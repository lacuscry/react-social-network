import Dialogs from './Dialogs';
import {connect} from 'react-redux/es/exports';


function mapStateToProps(state)  {
	return {
		isAuth: state.auth.isAuth
	};
}


const DialogsContainer =  connect(mapStateToProps)(Dialogs);


export default DialogsContainer;