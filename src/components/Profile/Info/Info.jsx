import classes from './Info.module.css';
import Preloader from '../../common/Preloader/Preloader.jsx';
import ProfileStatus from './ProfileStatus/ProfileStatus';


function Info(props){
	if(!props.profile){
		return <Preloader/>
	}
	

	return(
		<div className={classes.info_block}>
			<img className={classes.bg} src={props.defaultInfo.bg} alt="Image"/>
			<img className={classes.photo} src={props.profile.photos.large || props.defaultInfo.photos.large} alt="Image"/>
			<div className={classes.info}>
				<div className={classes.name}>{props.profile.fullName || props.defaultInfo.fullName}</div>
				<div className={classes.age}>{props.profile.age || props.defaultInfo.age}</div>
				<div className={classes.city}>{props.profile.city || props.defaultInfo.city}</div>
				<div className={classes.job}>{props.profile.job || props.defaultInfo.job}</div>
			</div>
			<ProfileStatus updateStatusThunk={props.updateStatusThunk} status={props.status}/>
		</div>
	)
}


export default Info;