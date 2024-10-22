import { DispatchObject, AppActions, AppState } from './app-context';

export const appReducer = (state: AppState, action: DispatchObject): AppState => {
  switch (action.type) {
    case AppActions.SaveCart:
      return { ...state, cart: action.payload };
    case AppActions.RemoveCart:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
