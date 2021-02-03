import {AppStateType, InferActionTypes} from './store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {squareFieldApi} from '../api/api';

const SET_FIVE_FIELD = 'SQUARE_TABLE_REDUCER/SET_FIVE_FIELD';
const SET_TEN_FIELD = 'SQUARE_TABLE_REDUCER/SET_TEN_FIELD';
const SET_FIFTEEN_FIELD = 'SQUARE_TABLE_REDUCER/SET_FIFTEEN_FIELD';
const SET_CELL_VALUE = 'SQUARE_TABLE_REDUCER/SET_CELL_VALUE';

let initialState = {
    selectedField: 5,
    arrayCellValue: [] as Array<number>,
   // arrayCellValue: 'wer' as string,
}

type InitialStateType = typeof initialState;

export const squareTableReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_FIVE_FIELD:
            return {...state, selectedField: action.fiveField}
        case SET_TEN_FIELD:
            return {...state, selectedField: action.tenField}
        case SET_FIFTEEN_FIELD:
            return {...state, selectedField: action.fifteenField}

        case SET_CELL_VALUE:
            // debugger
            // let a = {
              return {  ...state, arrayCellValue: [...state.arrayCellValue.slice(-4), action.cellName] }
              // return  {...state, arrayCellValue: action.cellName}

            // return a
        default:
            return state
    }
}

type ActionType = InferActionTypes<typeof actions>;
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>;

export const actions = {
    setFiveFieldAC: (fiveField: number) => {
        return ({type: SET_FIVE_FIELD, fiveField} as const)
    },
    setTenFieldAC: (tenField: number) => {
        return ({type: SET_TEN_FIELD, tenField} as const)
    },
    setFifteenFieldAC: (fifteenField: number) => {
        return ({type: SET_FIFTEEN_FIELD, fifteenField} as const)
    },
    setCellValueAC: (cellName: number) => {
        //  debugger
        return ({type: SET_CELL_VALUE, cellName} as const)
    },
}

export const getFieldTC = (selectField: number): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionType>) => {
    let data = await squareFieldApi.getFieldNumber();
    let fiveField = data.data.easyMode.field;
    let tenField = data.data.normalMode.field;
    let fifteenField = data.data.hardMode.field;
    try {
        if (selectField === 5) {
            dispatch(actions.setFiveFieldAC(fiveField))
        } else if (selectField === 10) {
            dispatch(actions.setTenFieldAC(tenField))
        } else if (selectField === 15) {
            dispatch(actions.setFifteenFieldAC(fifteenField))
        }
    } catch (e) {

    }
}


export const setCellNameToHistoryBlockTC = (cellname: number): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionType>) => {
    try {
        console.log(cellname)
        dispatch(actions.setCellValueAC(cellname))

    } catch (e) {

    }
}
