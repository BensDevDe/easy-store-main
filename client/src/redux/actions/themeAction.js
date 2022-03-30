import { TOGGLE } from './types'


export const themeAction = () => async (dispatch) => {
  dispatch({ type: TOGGLE })
}


