import classes from './PostForm.module.css';
import {reduxForm, Field} from 'redux-form';
import {requiredField, maxLengthThunk} from '../../../../utils/validators/validators';
import {fieldCreator} from '../../../common/FormsControls/FormsControls';


const maxLength30 = maxLengthThunk(30);


function PostForm(props){
	return(
		<form onSubmit={props.handleSubmit} className={classes.form}>
			<Field validate={[requiredField, maxLength30]} element='textarea' name='postText' component={fieldCreator} className={classes.textarea} placeholder='Enter your post'/>
			<button className={classes.button}>Send</button>
		</form>
	)
}


PostForm = reduxForm({
	form: 'post'
})(PostForm);


export default PostForm;