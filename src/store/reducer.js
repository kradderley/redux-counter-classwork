import { initialState } from "./initialState";
import { INCREMENT, DECREMENT, RESET, INCREMENT_BY_VALUE } from "./types";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      const copy = { ...state };
      copy.count += 1;
      return copy;
    }

    case INCREMENT_BY_VALUE: {
      const copy = { ...state };
      copy.count += action.payload;
      return copy;
    }

    case DECREMENT: {
      if (state.count === 0) return;
      const copy = { ...state };
      copy.count -= 1;
      return copy;
    }

    case RESET: {
      const copy = { ...state };
      copy.count = 0;
      return copy;
    }

    default:
      return initialState;
  }
}

// reducer function creates the logic that manipulates the state- takes 2 things and gives one or more things back.
// in this case, the reducer function takes the state and the action
// The reducer tales the state and an action
