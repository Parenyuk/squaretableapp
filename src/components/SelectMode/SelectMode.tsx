// @ts-nocheck
import React, {MouseEvent, FC, useState} from 'react';
import s from './SelectMode.module.scss'
import {useDispatch, useSelector} from 'react-redux';
import {getFieldTC, resetCellNameInHistoryBlockTC} from '../../redux/squareTableReducer';



type CellPropsType = {

}
export const SelectMode: FC<CellPropsType> = () => {

    const [field, setField] = useState(0)

    const dispatch = useDispatch();

    const onSelectValue = (e:  MouseEvent<HTMLButtonElement, MouseEvent>) => {
        let selectField = +(e.currentTarget.value)
        setField(selectField)
    }

    const dispatchSelectField = () => {
        dispatch(getFieldTC(field))
        dispatch(resetCellNameInHistoryBlockTC())
    }

    return (
        <div className={s.selectMode}>
            <select placeholder='Pick mode' className={s.selectButton} onChange={onSelectValue} >
                <option  defaultValue={'Pick mode'}>--Pick mode--</option>
                <option value="5">easy mode</option>
                <option value="10">normal mode</option>
                <option value="15">hard mode</option>
            </select>
           <button onClick={dispatchSelectField} className={s.startButton}>START</button>
        </div>
    )
}
