// @ts-nocheck
import React, {FC, useEffect, useState} from 'react';
import s from './Cell.module.scss'
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import { setCellNameToHistoryBlockTC } from '../../redux/squareTableReducer';


type CellPropsType = {
    index: number
}


export const Cell: FC<CellPropsType> = ({index}) => {
    const [isShown, setIsShown] = useState(false);
    const [cellName, setCellName] = useState([])
    const dispatch = useDispatch()

    let selectedField = useSelector<AppStateType, number>(state => state.squareTablePage?.selectedField);

     const onMouseEnter = () => {
        if(selectedField) {
            setIsShown(true)
            dispatch(setCellNameToHistoryBlockTC(selectedField, index))
            // debugger

        }
        }

    return (
        <div className={s.cell}
             onMouseEnter={onMouseEnter}
             onMouseLeave={() => setIsShown(false)}>
        </div>
    )
}

