import React from 'react';
import './ShowItemCompact.scss';

const GRAPHIC_HOST = 'http://thetvdb.com/banners';
const MAX_DESCRIPTION_LENGTH = 140;

const ShowItemCompact = ({ showItem }) => (
    <div className="ShowItemCompact">
        <div className="ShowItemCompact-banner">
            {showItem.banner && <img src={assembleBannerUrl(showItem.banner)} alt={showItem.seriesName}/>}
        </div>
        <div className="ShowItemCompact-content">
            <div className="ShowItemCompact-title">{showItem.seriesName}</div>
            <div className="ShowItemCompact-created">First airing date: <strong>{prettifyDate(showItem.firstAired)}</strong></div>
            <div className="ShowItemCompact-status">Airing status: <strong>{prettifyStatus(showItem.status)}</strong></div>
            <div className="ShowItemCompact-description">{shortenDescription(showItem.overview)}</div>
        </div>
    </div>
);

function assembleBannerUrl(relativePath) {
    return `${GRAPHIC_HOST}/${relativePath}`;
}

function prettifyDate(date) {
    const dateObject = new Date(date);
    if (!date || isNaN(dateObject)) {
        return 'n/a';
    }
    return dateObject.toLocaleDateString();
}

function prettifyStatus(status) {
    return status || 'n/a';
}

function shortenDescription(description) {
    if (!description) {
        description = '';
    }

    const shortDescription = description.slice(0, MAX_DESCRIPTION_LENGTH);
    if (shortDescription.length === description.length) {
        return description;
    }

    return `${shortDescription}...`;
}

export default ShowItemCompact;
