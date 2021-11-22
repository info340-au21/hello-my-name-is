import React from 'react';
import {GenerateHeader} from './components/Header.js';
import {GenerateTable} from './components/GenerateTable';
import './index.css';

export function BookmarkPage(props) {
    return (
        <div className="content-wrap">
            <GenerateHeader />
            <GenerateTable />
        </div>
    )
}

