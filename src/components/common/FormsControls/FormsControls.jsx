import classes from './FormsControls.module.css';


export const fieldCreator = ({input, meta:{touched, error}, ...props}) => {
	const hasError = touched && error;


	return(
		<div className={`${classes.form_control} ${hasError ? classes.error : ''}`}>
			<props.element {...input} {...props}/>
			<span>{error}</span>
		</div>
	)
}