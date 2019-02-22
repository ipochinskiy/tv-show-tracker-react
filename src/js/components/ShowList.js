import React from 'react';
import ShowItemCompact from './ShowItemCompact';
import './ShowList.scss';

const ShowList = ({ showList }) => (
    <div className="ShowList">
        {/* <div className="ShowList-header">
            <div className="ShowList-title">Top 12 Shows</div>
            <div className="ShowList-search">
                <input className="ShowList-search-input" type="text" placeholder="Search..." />
            </div>
        </div> */}
        <div className="ShowList-content">
            {showList.map(show => (
                <ShowItemCompact key={show.id} showItem={show} />
            ))}
        </div>
    </div>
);

export default ShowList;
