import { ACTIONS } from "./Constants/Constants"

export function OperationButton({dispatch, operation}) {
    return(
      <button onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})}>
        {operation}
      </button>
    )
  }