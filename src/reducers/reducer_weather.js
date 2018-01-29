import { FETCH_WEATHER } from '../actions/index'
export default function(state = [], action) {
	console.log("the action", action);
	switch(action.type) {
		case FETCH_WEATHER: 
			//return state.concat([ action.payload.data ]); // this is good too!
			return [ action.payload.data, ...state ] // [ city city city ]
			// not mutate state!!! like this: return state.push(action.payload.data)
	}
	return state;
}