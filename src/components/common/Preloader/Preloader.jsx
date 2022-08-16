import classes from './Preloader.module.css';
import preload from '../../../assets/icons/preload.png';


function Preloader(){
	return(
		<div className={classes.preload}>
			<img src={preload}/>
		</div>
	)
}


export default Preloader;