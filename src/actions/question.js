import { API_BASE_URL } from "../config";

export const FETCH_QUESTION_REQUEST = "FETCH_QUESTION_REQUEST";
export const fetchQuestionRequest = () => ({
  type: FETCH_QUESTION_REQUEST
});

export const FETCH_QUESTION_SUCCESS = "FETCH_QUESTION_SUCCESS";
export const fetchQuestionSuccess = (question) => ({
  type: FETCH_QUESTION_SUCCESS,
  question
});

export const FETCH_QUESTION_ERROR = "FETCH_QUESTION_ERROR";
export const fetchQuestionError = error => ({
  type: FETCH_QUESTION_ERROR,
  error
});

export const CHECK_ANSWER_REQUEST = 'CHECK_ANSWER_REQUEST';
export const checkAnswerRequest = () => ({
    type: CHECK_ANSWER_REQUEST
})

export const CHECK_ANSWER_SUCCESS = 'CHECK_ANSWER_SUCCESS';
export const checkAnswerSuccess = () => ({
    type: CHECK_ANSWER_SUCCESS
})

export const CHECK_ANSWER_ERROR = 'CHECK_ANSWER_ERROR';
export const checkAnswerError = error => ({
    type: CHECK_ANSWER_ERROR,
    error
})


export const fetchQuestion = () => (dispatch, getState) => {
    fetch(`${API_BASE_URL}/user/question`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(res => {
        let question = {
          question: '' //url
        }
        dispatch(fetchQuestionSuccess(question));
      })
      .catch(err => {
        dispatch(fetchQuestionError(err));
      });
};

export const checkAnswer = (input) => (dispatch, getState) => {
  dispatch(checkAnswerRequest());
  return fetch (`${API_BASE_URL}`, { //figure out endpoint
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        input
      })
  })
  .then(res => {
      if(!res.ok) {
        throw new Error(res.statusTest)
      }
      return res.json()
  })
  .then(res => {
    let question = {
      question: '', //url 
      answer: res.answer
    }
    dispatch(checkAnswerSuccess());
    dispatch(fetchQuestionSuccess(question))
  })
  .catch(err =>
    dispatch(checkAnswerError(err))
  );
}