import classes from './Info.module.css';
import Preloader from '../../common/Preloader/Preloader.jsx';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import {useState} from 'react';


function Info({profile, defaultInfo, updateStatusThunk, status, isOwner, savePhotoThunk}){
	const [hover, setHover] = useState(false);

	if(!profile){
		return <Preloader/>
	}

	function onMainPhotoSelected(e){
		if(e.target.files.length){
			savePhotoThunk(e.target.files[0]);
		}
	}


	return(
		<div className={classes.info_block}>
			<img className={classes.bg} src={defaultInfo.bg} alt="Image"/>
			<div onMouseEnter={() => isOwner && setHover(!hover)} onMouseLeave={() => isOwner && setHover(!hover)} className={classes.profilePhoto}>
				<img className={classes.photo} src={profile.photos.large || defaultInfo.photos.large} alt="Image"/>
				<input onChange={onMainPhotoSelected} id="photo" className={classes.input} type="file"/>
				<label htmlFor="photo" className={hover ? classes.label : `${classes.label} ${classes.label_hide}`}>Update</label>
			</div>
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