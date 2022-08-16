import Users from './Users';
import {changeCurrentDialog} from '../../../Redux/dialogs-reducer';
import {connect} from 'react-redux';


function mapStateToProps(state){
	return{
		state: state.dialogsPage
	};
}


const UsersContainer = connect(mapStateToProps, {changeCurrentDialog})(Users);


export default UsersContainer;