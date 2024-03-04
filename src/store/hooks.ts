import {
    useDispatch,
    useSelector,
    type TypedUseSelectorHook,
  } from 'react-redux';
  
  import { AppDispatch, RootState } from './store';

  type DispatchFunction = () => AppDispatch;
  
  export const useBlogDispatch: DispatchFunction = useDispatch;
  export const useBlogSelector: TypedUseSelectorHook<RootState> = useSelector;