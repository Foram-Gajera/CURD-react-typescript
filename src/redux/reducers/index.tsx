import { combineReducers } from "redux";
import users from './users'

const rootReducer = combineReducers({ users: users });

// export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
