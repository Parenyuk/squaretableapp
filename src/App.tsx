import React from 'react';
import './App.scss';
import {SquareTable} from './components/SquareTable/SquareTable';
import './App.scss'
import {SelectMode} from './components/SelectMode/SelectMode';
import {HistoryBlock} from './components/HistoryBlock/HistoryBlock';

function App() {
    return (

        <div className={'wrapper'}>
            <div>
                <SelectMode/>
                <div className={'app'}>
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

