import {ADD_NOTE, FETCH_NOTE, REMOVE_NOTE, SHOW_LOADER, HIDE_LOADER, SHOW_TEXT} from "../types";

const handlers ={
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [HIDE_LOADER]: state => ({...state, loading: false}),
    [ADD_NOTE]: (state, {payload}) => ({...state, notes: [...state.notes, payload]}),
    [FETCH_NOTE]: (state, {payload}) => ({...state, notes: payload, loading: false}),
    [REMOVE_NOTE]: (state, {payload}) => ({...state, notes: state.notes.filter(note => note.id !== payload)}),
    DEFAULT: state => state
}

export const firebaseReduces = (state,action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state,action)
}