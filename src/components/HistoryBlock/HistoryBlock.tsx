import React, {FC} from 'react';
import s from './HistoryBlock.module.scss'
import {HistoryItem} from './HistoryItem/HistoryItem';

export const HistoryBlock: FC = () => {
    return (
        <div className={s.historyBlock}>
            <h1 className={s.title}>History</h1>
            <HistoryItem/>
        </div>
    )
}
