
import { useReducer, useCallback } from "react";
const httpReducer = (curHttpState, action) => {
	switch (action.type) {
		case 'SEND':
			return { loading: true, error: null, data: null };
		case 'RESPONSE':
			return { ...curHttpState, loading: false, data: action.responseData };
		case 'ERROR':
			return { loading: false, error: action.errorMessage };
		case 'CLEAR':
			return { ...curHttpState, error: null };
		default:
			throw new Error('Should not be reached!');
	}
};

const useHttp = (url, method, body) => {
	const [httpState, dispatchHttp] = useReducer(httpReducer, {
		loading: false,
		error: null,
		data: null
	});

	const sendRequest = useCallback(() => {
		dispatchHttp({ type: 'SEND' });
		fetch(
			url,
			{
				method: method,
				body: body,
				headers: {
					'Context-Type': 'application/json'
				}
			}
		)
			.then(response => {
				// dispatchHttp({ type: 'RESPONSE' });
				response.json();
			})
			.then(responseData => {
				dispatchHttp({ type: 'RESPONSE', responseData: responseData });
			})
			.catch(error => {
				dispatchHttp({ type: 'ERROR', errorMessage: 'Something went wrong!' });
			})
	}, []);
	return {
		isLoading: httpState.loading,
		data: httpState.data,
		error: httpState.error,
		sendRequest: sendRequest,
	};
};

export default useHttp;