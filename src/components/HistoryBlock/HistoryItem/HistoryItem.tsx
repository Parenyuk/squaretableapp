import React, {FC} from 'react';
import s from './HistoryItem.module.scss'
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../redux/store';

type CellPropsType = {

}

export const HistoryItem: FC<CellPropsType> = () => {

    const cellSelected = useSelector<AppStateType, any>(state => state.squareTablePage.arrayCellValue)

   // console.log(cellSelected)

    const cellRenderSelected = cellSelected?.map((item: string, index: number) => {
        return (
            <div key={index} className={s.historyItem}>
                {item}
            </div>
        )
    })


    return (
        <div>
            { cellRenderSelected}
            {/*{cellSelected && cellSelected}*/}
        </div>
    )
}
