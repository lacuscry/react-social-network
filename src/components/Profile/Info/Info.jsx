import classes from './Info.module.css';
import Preloader from '../../common/Preloader/Preloader.jsx';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';


function Info({profile, defaultInfo, updateStatusThunk, status}){
	if(!profile){
		return <Preloader/>
	}


	return(
		<div className={classes.info_block}>
			<img className={classes.bg} src={defaultInfo.bg} alt="Image"/>
			<img className={classes.photo} src={profile.photos.large || defaultInfo.photos.large} alt="Image"/>
			<div className={classes.info}>
				<div className={classes.name}>{profile.fullName || defaultInfo.fullName}</div>
				<div className={classes.age}>{profile.age || defaultInfo.age}</div>
				<div className={classes.city}>{profile.city || defaultInfo.city}</div>
				<div className={classes.job}>{profile.job || defaultInfo.job}</div>
			</div>
			<ProfileStatusWithHooks updateStatusThunk={updateStatusThunk} status={status}/>
		</div>
	)
}


export default Info;