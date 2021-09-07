import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";




let reducersPack = combineReducers({
    dialogsPage : dialogsReducer,
    profilePage:profileReducer,
    sidebar: sideBarReducer,
    usersPage : usersReducer
});


let store = createStore(reducersPack);


window.store = store;
export default store;