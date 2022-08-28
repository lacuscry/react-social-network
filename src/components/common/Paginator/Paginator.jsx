import classes from './Paginator.module.css';


function Paginator({totalUsersCount, pageSize, onChangeSelectedPage, selectedPage}){
	const pagesCount = Math.ceil(totalUsersCount / pageSize);
	
	let pages = [];
	
	for (let i = 1; i <= pagesCount; i++) {
		if(i <= 10){
			pages.push(i);
		}
	}


	return(
		<div className={classes.buttons}>
			{pages.map(page => <button onClick={() => onChangeSelectedPage(page)} className={selectedPage === page ? `${classes.selected} ${classes.button}` : classes.button} key={page}>{page}</button>)}
		</div>
	);
}


export default Paginator;