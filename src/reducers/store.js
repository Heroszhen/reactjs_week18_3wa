import { createStore,combineReducers, applyMiddleware } from 'redux';
import { todoReducer } from './todoReducer';
import { logReducer } from './logReducer';
import { tokenReducer } from './tokenReducer';
import logMiddleware from '../middlewares/logMiddleware';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    todoreducer:todoReducer,
    logreducer:logReducer,
    tokenreducer:tokenReducer
});
const store = createStore(
    rootReducer,applyMiddleware(thunk,logMiddleware)
);
export default store