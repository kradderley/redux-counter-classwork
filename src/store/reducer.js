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
      // presents the decrement from going below 0
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
      console.log("Reducer started or invalid reducer type");
      return initialState;
  }
}
