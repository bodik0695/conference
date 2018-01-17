import createHistory from "history/createHashHistory";
import { syncHistoryWithStore } from 'react-router-redux';
import { store } from './store';

const history = createHistory();

export default history ;