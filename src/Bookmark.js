import React from 'react';
import {generateHeader} from './components/header.js';
import {generateTable} from './components/generateTable';
import './index.css';

export function bookmarkPage(props) {
    return (
        <div className="content-wrap">
            <generateHeader />
            <generateTable />
        </div>
    )
}

