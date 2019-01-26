import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM} from '../actions/types'
import _ from 'lodash'

/* const initState = {
        title: "My stream",
        description: "my first stream i created",
        id: 1,
        allStreams: null
} */

export default (state = {}, {type, payload})=> {
    switch(type) {
case CREATE_STREAM:
return {...state, [payload.id]:payload}
case FETCH_STREAMS:
return {
 /*    ...state,
    allStreams:[...payload] */
    ...state, ..._.mapKeys(payload, "id")
}
case FETCH_STREAM:
return {...state, [payload.id]:payload}
case EDIT_STREAM:
return {...state, [payload.id]:payload}
case DELETE_STREAM:
return _.omit(state, payload)

    default:
    return state;
}}