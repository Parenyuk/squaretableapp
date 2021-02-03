// @ts-nocheck
import React, {useEffect, useState} from 'react';
import s from './SquareTable.module.scss'
import {Cell} from '../Cell/Cell';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';


export const SquareTable = () => {

    let selectedField = useSelector<AppStateType, number>(state => state.squareTablePage.selectedField)

    useEffect(() => {
    }, [selectedField])

    const field = 5


    return (
        <div className={selectedField === 5 ? s.squareTableFive : 10 ? s.squareTableTen : 15 ? s.squareTableFifteen : ''}>
            {
                Array(selectedField === 5 ? 25 : 10 ? 100 : 15 ? 225 : '' ).fill(undefined).map((c: any, i: number) => <Cell key={i} index={i}/>)
            }

        </div>
    )
}
