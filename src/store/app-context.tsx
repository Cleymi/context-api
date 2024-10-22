import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  useContext,
  useReducer,
} from 'react';
import { Product } from '../domain/product';
import { appReducer } from './reducer';

export enum AppActions {
  SaveCart = 'SAVE_CART',
  RemoveCart = 'REMOVE_CART',
}

export interface AppState {
  cart: Product[];
}

const initialValue: AppState = {
  cart: [],
};

export type DispatchObject<T = any> = {
  type: AppActions;
  payload: T;
};

const AppStateContext = createContext(initialValue);
const AppDispatchContext = createContext<Dispatch<DispatchObject> | undefined>(undefined);

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialValue);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

const useAppState = () => {
  const context = useContext(AppStateContext);

  if (context) {
    return context;
  }

  throw new Error('useAppState debe estar dentro del AppStateContext');
};

const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);

  if (context) {
    return context;
  }

  throw new Error('useAppDispatch debe estar dentro del AppDispatchContext');
};

export { AppProvider, useAppState, useAppDispatch };
