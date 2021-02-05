import {AppStateType, InferActionTypes} from './store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {squareFieldApi} from '../api/api';

const SET_FIVE_FIELD = 'SQUARE_TABLE_REDUCER/SET_FIVE_FIELD';
const SET_TEN_FIELD = 'SQUARE_TABLE_REDUCER/SET_TEN_FIELD';
const SET_FIFTEEN_FIELD = 'SQUARE_TABLE_REDUCER/SET_FIFTEEN_FIELD';
const SET_CELL_VALUE = 'SQUARE_TABLE_REDUCER/SET_CELL_VALUE';
const RESET_CELL_VALUE = 'SQUARE_TABLE_REDUCER/RESET_CELL_VALUE';

let initialState = {
    selectedField: 5,
    arrayCellValue: [] as Array<string>,
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
            return {...state, arrayCellValue: [...state.arrayCellValue.slice(-4), action.cellName]}
        case RESET_CELL_VALUE:
            return initialState
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
    setCellValueAC: (cellName: string) => {
        return ({type: SET_CELL_VALUE, cellName} as const)
    },
    resetCellValueAC: () => {
        return ({type: RESET_CELL_VALUE,} as const)
    },
}

export const getFieldTC = (selectField: number): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionType>) => {
    try {
        let data = await squareFieldApi.getFieldNumber();
        let {easyMode, normalMode, hardMode} = data.data

        if (selectField === 5) {
            dispatch(actions.setFiveFieldAC(easyMode.field))
        } else if (selectField === 10) {
            dispatch(actions.setTenFieldAC(normalMode.field))
        } else if (selectField === 15) {
            dispatch(actions.setFifteenFieldAC(hardMode.field))
        }
    } catch (e) {
        throw new Error(e)
    }
}


export const resetCellNameInHistoryBlockTC = () => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionType>) => {
    try {
        dispatch(actions.resetCellValueAC())
    } catch (e) {

    }
}

export const setCellNameToHistoryBlockTC = (selectedField: number, index: number): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionType>) => {
    try {
        let indexRowName = Math.ceil((index + 1) / selectedField);
        let indexColName = (index + 1) - ((indexRowName - 1) * selectedField)
        let cellName = `row ${indexRowName} col ${indexColName}`;
        dispatch(actions.setCellValueAC(cellName))

    } catch (e) {
        throw new Error(e)
    }
}
