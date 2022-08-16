// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";

// const store = {
// 	_state: {
// 		profilePage: {
// 			name: 'Tim Avezov',
// 			age: '22 y.o',
// 			city: 'Moscow, Russia',
// 			job: 'Front-end Developer',
// 			photo: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80',
// 			bg: 'https://img.freepik.com/free-photo/cryptocurrency-coding-digital-blue-background-open-source-blockchain-concept_53876-124644.jpg?w=2000',
// 			newPostText: "What's new?",
// 			posts: [{
// 					text: "It's me",
// 					img: 'https://media.istockphoto.com/photos/programmer-working-with-program-code-picture-id1075599562?k=20&m=1075599562&s=612x612&w=0&h=cDFY2kKyhFzSNNlDQsaxoekIW0v7iyaMBkxp11Fz33U=',
// 					likes: 10
// 				},
// 				{
// 					text: "I'm tired",
// 					img: null,
// 					likes: 5
// 				},
// 				{
// 					text: "Hi everyone",
// 					img: null,
// 					likes: 1
// 				}
// 			],
// 		},
// 		dialogsPage: {
// 			dialogs: [{
// 					id: 1,
// 					name: 'Hannibal Lecter',
// 					img: 'https://i.pinimg.com/564x/f0/17/80/f01780954af2443959496cb6cffda501.jpg',
// 					messages: [{
// 							whose: 'his',
// 							text: 'Hello, Tim. I invite you to dinner on Sunday 5 p.m'
// 						},
// 						{
// 							whose: 'mine',
// 							text: 'Hello, I am glad to accept your invite'
// 						},
// 						{
// 							whose: 'his',
// 							text: 'See you later'
// 						}
// 					]
// 				},
// 				{
// 					id: 2,
// 					name: 'Ryan Gosling',
// 					img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhyXhqZgHyUTgDsGcUevfalYD8xUYm_cSyw&usqp=CAU',
// 					messages: [{
// 							whose: 'his',
// 							text: 'Sup. Have you seen my hammer anywhere?'
// 						},
// 						{
// 							whose: 'mine',
// 							text: 'Hi, no I have not'
// 						},
// 					]
// 				},
// 				{
// 					id: 3,
// 					name: 'Tyler Durden',
// 					img: 'https://i1.sndcdn.com/artworks-000555275094-auhtwr-t500x500.jpg',
// 					messages: []
// 				},
// 				{
// 					id: 4,
// 					name: 'Louis Garrel',
// 					img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QF33kHNeITOeUN04h64n6H2NTLhN63qwWJxeoS7KPdqigBSQZq_uEIt3cx-wNTA0Kbo&usqp=CAU',
// 					messages: []
// 				},
// 				{
// 					id: 5,
// 					name: 'Humbert',
// 					img: 'https://www.ecodelcinema.com/wp-content/uploads/2013/08/Jeremy-Irons1.jpg.webp',
// 					messages: []
// 				}
// 			],
// 			currentDialog: '',
// 			currentTextMessage: 'Write a message...',
// 		}
// 	},
// 	_callSubscriber() {
// 		console.log('State changed');
// 	},
// 	getState() {
// 		return this._state;
// 	},
// 	subscribe(observer) {
// 		this._callSubscriber = observer;
// 	},
// 	dispatch(action) {
// 		this._state.profilePage = profileReducer(this._state.profilePage, action);
// 		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

// 		this._callSubscriber(this._state);
// 	},
// };


// export default store;
// window.store = store;