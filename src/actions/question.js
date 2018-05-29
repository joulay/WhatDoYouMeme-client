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
          question: ''
        }
        dispatch(fetchQuestionSuccess(question));
      })
      .catch(err => {
        dispatch(fetchQuestionError(err));
      });
};