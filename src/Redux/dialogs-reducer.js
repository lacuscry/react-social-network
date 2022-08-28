const CHANGE_CURRENT_DIALOG = 'dialogs/CHANGE-CURRENT-DIALOG';
const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';


const initialState = {
	dialogs: [
		{
			id: 1,
			name: 'Hannibal Lecter',
			img: 'https://i.pinimg.com/564x/f0/17/80/f01780954af2443959496cb6cffda501.jpg',
			messages: [{
					whose: 'his',
					text: 'Hello, Tim. I am inviting you to dinner on Sunday 5 p.m'
				},
				{
					whose: 'mine',
					text: 'Hello, I am glad to accept your invite'
				},
				{
					whose: 'his',
					text: 'See you later'
				}
			]
		},
		{
			id: 2,
			name: 'Ryan Gosling',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhyXhqZgHyUTgDsGcUevfalYD8xUYm_cSyw&usqp=CAU',
			messages: [{
					whose: 'his',
					text: 'Sup. Did you see my hammer anywhere?'
				},
				{
					whose: 'mine',
					text: 'Hi. No, I did not'
				},
			]
		},
		{
			id: 3,
			name: 'Tyler Durden',
			img: 'https://i1.sndcdn.com/artworks-000555275094-auhtwr-t500x500.jpg',
			messages: []
		},
		{
			id: 4,
			name: 'Louis Garrel',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QF33kHNeITOeUN04h64n6H2NTLhN63qwWJxeoS7KPdqigBSQZq_uEIt3cx-wNTA0Kbo&usqp=CAU',
			messages: []
		},
		{
			id: 5,
			name: 'Humbert',
			img: 'https://www.ecodelcinema.com/wp-content/uploads/2013/08/Jeremy-Irons1.jpg.webp',
			messages: []
		}
	],
	currentDialog: ''
};


function dialogsReducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_CURRENT_DIALOG: {

			return {
				...state,
				currentDialog: action.id
			};
		}

		case SEND_MESSAGE: {
			if (state.currentDialog !== '') {
				const stateCopy = JSON.parse(JSON.stringify(state));

				stateCopy.dialogs[stateCopy.currentDialog].messages.push({
					whose: 'mine',
					text: action.message
				});


				return stateCopy;
			} else {
				return state;
			}
		}

		default:

			return state;
	}
}


export const changeCurrentDialog = id => ({
	type: CHANGE_CURRENT_DIALOG,
	id: id
});

export const sendMessage = formData => ({
	type: SEND_MESSAGE,
	message: formData.message
});


export default dialogsReducer;