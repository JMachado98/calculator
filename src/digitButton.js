import { ACTIONS } from "./Constants/Constants"

export function DigitButton({dispatch, digit}) {
    return(
      <button onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})}>
        {digit}
      </button>
    )
  }