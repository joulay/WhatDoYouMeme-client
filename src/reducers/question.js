import * as actions from '../actions/question';

const initialState = {
	question: [],
	currentQuestion: {img_url:'https://i.imgur.com/BE2y1Hu.png'},
	loading: false,
	error: null
};

export default function questionReducer(state = initialState, action) {
	console.log('something else')
	if (action.type === actions.FETCH_QUESTION_REQUEST) {
		return Object.assign({}, state, {
			loading: true
		});
  }
	if (action.type === actions.FETCH_QUESTION_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			question: action.question
		});
  }
	if (action.type === actions.FETCH_QUESTION_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		});
	}
	if (action.type === actions.FETCH_LOAD_SUCCESS) {
		console.log('here alskdjlaskjdlaksjd')
		return Object.assign({}, state, {
			currentQuestion: action.question
		})
	}
    return state;     
}

