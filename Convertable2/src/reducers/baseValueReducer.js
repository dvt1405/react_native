import { CHANGE_BASE_VALUE } from '../actions/types';

export default (state = 0, action) => action.type === CHANGE_BASE_VALUE ? action.payload : state;