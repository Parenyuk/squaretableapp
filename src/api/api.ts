import axios from 'axios';
import {ResponseType} from '../common/types';


const instance = axios.create({
    baseURL: 'http://demo1030918.mockable.io/'
})

export const squareFieldApi = {
    getFieldNumber() {
        return instance.get<any>(``)
    },
}
