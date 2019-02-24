import React from 'react';
import ShowItemCompact from './ShowItemCompact';
import './ShowList.scss';

const ShowList = ({ showList }) => (
    <div className="ShowList">
        <div className="ShowList-content">
            {showList.map(show => (
                <ShowItemCompact key={show.id} showItem={show} />
            ))}
        </div>
    </div>
);

export default ShowList;
