import {
    TOGGLE
} from '../actions/types'

const initialState = { darkMode: false };


const themeReducer = (state = initialState, action) => {
    const {type, payload} = action

    switch(type) {
        case TOGGLE:
            return{darkMode: !state.darkMode}
        default:
            return state
    }

}

export default themeReducer