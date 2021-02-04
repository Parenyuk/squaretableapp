// @ts-nocheck
import React, {useEffect, useState} from 'react';
import s from './SquareTable.module.scss'
import {Cell} from '../Cell/Cell';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';


export const SquareTable = () => {

    let selectedField = useSelector<AppStateType, number>(state => state.squareTablePage.selectedField)

    let style = selectedField === 5 ? s.squareTableFive : selectedField === 10 ? s.squareTableTen
        : selectedField === 15 ?  s.squareTableFifteen : null

    return (
            <div className={style}>
                {
                    Array(selectedField === 5 ? 25 : selectedField === 10 ? 100
                        : selectedField ===  15 ? 225 : 0 ).fill(undefined)
                        .map((c: any, i: number) => <Cell key={i} index={i}/>)
                }
        </div>
    )
}
