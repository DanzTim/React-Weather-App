import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  switch (action.type){
    case FETCH_WEATHER:
    //Do not ever set your state equal to something, or manipulate it
    //Do not ever write state = something
    //Do not use state.push, use state.concat instead, like below
    //state.concat([ action.payload.data ]);
    //Line above makes a new array that is a combination of old array and new array
     return [ action.payload.data, ...state ];
  }

  return state;
}
