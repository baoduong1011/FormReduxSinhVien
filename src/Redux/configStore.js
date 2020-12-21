import {combineReducers, createStore} from 'redux';
import {QuanLyFormSinhVien} from './QuanLyFormSinhVien';


const rootReducer = combineReducers({
    QuanLyFormSinhVien,
})


export const store = createStore(rootReducer);