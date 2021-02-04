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
              return {  ...state, arrayCellValue: [...state.arrayCellValue.slice(-4), action.cellName] }
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

const firstRow = [0,1,2,3,4];
const secondRow = [5,6,7,8,9];
const thirdRow = [10, 11, 12, 13, 14];
const fourthRow = [15,16,17,18,19];
const fifthRow = [20,21,22,23,24];

const firstCol = [0, 5, 10, 15, 20];
const secondCol = [1, 6, 11, 16, 21];
const thirdCol = [2,7,12,17,22]
const fourthCol = [3,8,13,18,23]
const fifthCol = [4,9,14,19,24]

//     if(index === firstRow.find(el => el === index))  {
//         return indexRowName = 'row1'
//     }
//     else if(index === secondRow.find(el => el === index))  {
//         return indexRowName = 'row2'
//     }
//    else if(index === thirdRow.find(el => el === index))  {
//         return indexRowName = 'row3'
//     }
//     else if(index === fourthRow.find(el => el === index))  {
//         return indexRowName = 'row4'
//     }
//    else if(index === fifthRow.find(el => el === index))  {
//         return indexRowName = 'row5'
//     }

// export const setCellNameToHistoryBlockTC = (selectedField: number, index: number ): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionType>) => {
//         // debugger
//         let indexRowName = '';
//         let indexColName = ''
//     try {
//         if (firstRow.filter(el => el === index)) {
//             // debugger
//             return indexRowName = 'row1'
//         }
//         if  (selectedField === 5 && index === secondRow.find(el => el === index)) {
//             return indexRowName = 'row2'
//         }
//         if (selectedField === 5 && index === thirdRow.find(el => el === index)) {
//             return indexRowName = 'row3'
//         }
//         if (selectedField === 5 && index === fourthRow.find(el => el === index)) {
//             return indexRowName = 'row4'
//         }
//         if (selectedField === 5 && index === fifthRow.find(el => el === index)) {
//             return indexRowName = 'row5'
//         }
//         if (selectedField === 5 && index === firstCol.find(el => el === index)) {
//             return indexColName = 'col1'
//         }
//         if (selectedField === 5 && index === secondCol.find(el => el === index)) {
//             return indexColName = 'col1'
//         }
//         if (selectedField === 5 && index === thirdCol.find(el => el === index)) {
//             return indexColName = 'col1'
//         }
//         if (selectedField === 5 && index === fourthCol.find(el => el === index)) {
//             return indexColName = 'col1'
//         }
//         if (selectedField === 5 && index === fifthCol.find(el => el === index)) {
//             return indexColName = 'col1'
//         }
//         let cellname = indexRowName + indexColName;
//         // debugger;
//         console.log(cellname)
//         dispatch(actions.setCellValueAC(cellname))
//
//     } catch (e) {
//
//     }
// }

export const setCellNameToHistoryBlockTC = (index: number ): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionType>) => {
    try {
        dispatch(actions.setCellValueAC(index))

    } catch (e) {

    }
}
