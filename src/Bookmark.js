import React from 'react';
import {GenerateTable} from './components/GenerateTable';
import './index.css';

import favData from './data/favbookmark.json';

export function BookmarkPage(props) {
    return (
        <div className="content-wrap">
            <GenerateTable fav={favData}/>
        </div>
    )
}

