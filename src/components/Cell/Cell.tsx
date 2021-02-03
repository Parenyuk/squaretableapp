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



    // const checkCellValue = (index: number) => {
        //  let indexRowName = '';
        //         //  let indexColName = ''
        //         // if(index === firstRow.find(el => el === index))  {
        //         //     return indexRowName = 'row1'
        //         // }
        //         // if(index === secondRow.find(el => el === index))  {
        //         //     return indexRowName = 'row2'
        //         // }
        //         // if(index === thirdRow.find(el => el === index))  {
        //         //     return indexRowName = 'row3'
        //         // }
        //         // if(index === fourthRow.find(el => el === index))  {
        //         //     return indexRowName = 'row4'
        //         // }
        //         // if(index === fifthRow.find(el => el === index))  {
        //         //     return indexRowName = 'row5'
        //         // }
   // }



     const onMouseEnter = () => {
        if(selectedField) {
            setIsShown(true)
            dispatch(setCellNameToHistoryBlockTC(index))

        }
        }



    // const onMouseEnter = () => {
    //     setIsShown(true);
    //     let indexRowName = '';
    //     let indexColName = ''
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
    // }

    return (
        <div className={s.cell}
             onMouseEnter={onMouseEnter}
             onMouseLeave={() => setIsShown(false)}>
        </div>
    )
}

