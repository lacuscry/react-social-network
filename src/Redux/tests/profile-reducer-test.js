import profileReducer, {addPost, deletePost} from "../profile-reducer";
	

const state = {
	posts: [
		{
			text: "Hi everyone",
			img: null,
			likes: 1
		},
		{
			text: "I'm tired",
			img: null,
			likes: 5
		},
		{
			text: "It's me",
			img: 'https://media.istockphoto.com/photos/programmer-working-with-program-code-picture-id1075599562?k=20&m=1075599562&s=612x612&w=0&h=cDFY2kKyhFzSNNlDQsaxoekIW0v7iyaMBkxp11Fz33U=',
			likes: 10
		}	
	]
};


test('length of posts should be incremented', () => {
	const action = addPost({postText:'test text'});

	const newState = profileReducer(state, action);

	expect(newState.posts.length).toBe(4);
});

test('text of new post should be right correct', () => {
	const action = addPost({postText:'test text'});

	const newState = profileReducer(state, action);

	expect(newState.posts[3].text).toBe('test text');
});

test('after deleting length of posts should be decremented', () => {
	const action = deletePost(2);

	const newState = profileReducer(state, action);

	console.log(newState.posts);
	expect(newState.posts.length).toBe(2);
});