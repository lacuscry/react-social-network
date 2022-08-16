import Info from "./Info";
import {connect} from 'react-redux';


function mapStateToProps(state){
	return{
		state: state.profilePage
	};
}

const InfoContainer = connect(mapStateToProps)(Info);


export default InfoContainer;