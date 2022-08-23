import classes from './MessageForm.module.css';
import {reduxForm, Field} from 'redux-form';
import {requiredField, maxLengthThunk} from '../../../../utils/validators/validators';
import {fieldCreator} from '../../../common/FormsControls/FormsControls';


const maxLength30 = maxLengthThunk(30);


function MessageForm(props){
	return(
		<form onSubmit={props.handleSubmit} className={classes.form}>
			<Field validate={[requiredField, maxLength30]} element='textarea' component={fieldCreator} name='message' placeholder='Enter your message'/>
			<button>Send</button>
		</form>
	)
}


MessageForm = reduxForm({
	form: 'message'
})(MessageForm);


export default MessageForm;