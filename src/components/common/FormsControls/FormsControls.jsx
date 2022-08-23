import classes from './FormsControls.module.css';


export const fieldCreator = ({input, meta, ...props}) => {
	const hasError = meta.touched && meta.error;


	return(
		<div className={`${classes.form_control} ${hasError ? classes.error : ''}`}>
			<props.element {...input} {...props}/>
			<span>{meta.error}</span>
		</div>
	)
}