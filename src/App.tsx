import React from 'react';
import './App.scss';
import {SquareTable} from './components/SquareTable/SquareTable';
import './App.scss'
import {SelectMode} from './components/SelectMode/SelectMode';
import {HistoryBlock} from './components/HistoryBlock/HistoryBlock';
import {useSelector} from 'react-redux';
import {AppStateType} from './redux/store';

function App() {

    let selectedField = useSelector<AppStateType, number>(state => state.squareTablePage.selectedField)

    let style = selectedField === 5 ? 'sizeFiveField' : selectedField === 10 ? 'sizeTenField'
        : selectedField === 15 ? 'sizeFifteenField' : ''

    return (

        <div className={'wrapper'}>
            <div>
                <SelectMode/>
                <div className={style}>
                    <SquareTable />
                </div>
            </div>
           <div>
               <HistoryBlock/>
           </div>
        </div>


    );
}

export default App;

