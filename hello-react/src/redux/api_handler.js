const GET_GREETING_REQUEST = 'GET_GREETING_REQUEST';
const GET_GREETING_SUCCESS = 'GET_GREETING_SUCCESS';

const url = new URL('http:localhost:3000/v1/greetings');

const initialState = {
  greeting: 'Greeting app',
  language: 'different languages',
};

const getGreetingRequest = () => ({
  type: GET_GREETING_REQUEST,
});
const getGreetingSuccess = (payload) => ({
  type: GET_GREETING_SUCCESS,
  payload,
});

export const getGreeting = () => async (dispatch) => {
  dispatch(getGreetingRequest());
  fetch(url)
    .then((result) => result.json())
    .then((json) => {
      dispatch(getGreetingSuccess(json));
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
