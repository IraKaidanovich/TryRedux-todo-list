import { legacy_createStore as createStore} from 'redux'
import rootReducer from './reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(rootReducer, devToolsEnhancer({ trace: true }));
export default store;

