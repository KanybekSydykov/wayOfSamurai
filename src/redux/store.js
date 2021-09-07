import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sidebar-reducer";


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "1st post", likesCount: 12 },
        { id: 2, message: "2nd post", likesCount: 11 },
        { id: 3, message: "3rd post", likesCount: 11 },
        { id: 4, message: "asdf post", likesCount: 11 },
      ],
      newPostText: "test2",
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "1st msg" },
        { id: 2, message: "2nd msg" },
        { id: 3, message: "3rd msg" },
        { id: 4, message: "4th msg" },
        { id: 5, message: "5th msg" },
        ],
      dialogs: [
        { id: 1, name: "Kana" },
        { id: 2, name: "Eldi" },
        { id: 3, name: "Meka" },
        { id: 4, name: "Poker Club" },
        { id: 5, name: "Oskar" },
        { id: 6, name: "Bayza" },
      ],
      newMessageBody : ''
    },
    sidebar: {
      Friends: [{ name: "Eldi" }, { name: "Tilek" }, { name: "Zhoke" }],
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
 
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

 dispatch(action){
  this._state.profilePage = profileReducer(this._state.profilePage,action);
  this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
  this._state.sidebar = sideBarReducer(this._state.sidebar,action);
  this._callSubscriber(this._state);
 }
  }
   
window.store = store;

export default store;
