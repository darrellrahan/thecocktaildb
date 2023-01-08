import { ACTIONS } from "./actions";

export default function reducer(state, action) {
  if (action.type === ACTIONS.SET_DRINKS_DATA) {
    return { ...state, drinks: action.payload.value };
  }
  if (action.type === ACTIONS.SET_SEARCH_TEXT) {
    return { ...state, searchText: action.payload.value };
  }
  if (action.type === ACTIONS.SET_DRINKID) {
    return { ...state, currentDrinkId: action.payload.value };
  }
  if (action.type === ACTIONS.OPEN_SIDEBAR) {
    return { ...state, isShowSidebar: true };
  }
  if (action.type === ACTIONS.CLOSE_SIDEBAR) {
    return { ...state, isShowSidebar: false };
  }
  if (action.type === ACTIONS.SET_ISLOADING) {
    return { ...state, isLoading: action.payload.value };
  }
  if (action.type === ACTIONS.SET_SINGLEDRINK_DATA) {
    return { ...state, singleDrink: action.payload.value };
  }
  if (action.type === ACTIONS.SET_SINGLEDRINK_INGREDIENTS) {
    return { ...state, singleDrinkIngredients: action.payload.value };
  }
  if (action.type === ACTIONS.SET_SEARCH_RESULT) {
    return { ...state, searchNotFound: !action.payload.value };
  }
}
