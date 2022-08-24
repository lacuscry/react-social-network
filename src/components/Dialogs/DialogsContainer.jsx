import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../hoc/withAuthRedirect';


const authRedirectComponent = withAuthRedirect(Dialogs);


const DialogsContainer =  connect()(authRedirectComponent);


export default DialogsContainer;