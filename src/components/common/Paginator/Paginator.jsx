import {useState, useEffect} from 'react';
import classes from './Paginator.module.css';


function Paginator({totalItemsCount, pageSize, portionSize, onChangeSelectedPage, selectedPage}){
	const pagesCount = Math.ceil(totalItemsCount / pageSize);
	
	const pages = [];
	
	const portionCount = Math.ceil(pagesCount / portionSize);
	
	const [portionNumber, setPortionNumber] = useState(1);
	
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	
	const rightPortionPageNumber = portionNumber * portionSize;
	
	
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}


	useEffect(() => setPortionNumber(Math.ceil(selectedPage / portionSize)), [selectedPage]);


	return(
		<div className={classes.buttons}>
			{portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)} className={classes.nav}>Prev</button>}
			{pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
			.map(page => <button onClick={() => onChangeSelectedPage(page)} className={selectedPage === page ? `${classes.selected} ${classes.button}` : classes.button} key={page}>{page}</button>)}
			{portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)} className={classes.nav}>Next</button>}
		</div>
	);
}


export default Paginator;