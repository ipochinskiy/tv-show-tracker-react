import React from 'react';
import { connect } from "react-redux";
import ShowItemCompact from './ShowItemCompact';
import './ShowList.scss';

export class ShowList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { showList, isShowListLoading } = this.props;

        if (isShowListLoading) {
            return (
                <div className="ShowList">
                    <div className="ShowList-content">
                        <div className="ShowList-spinner">
                            <div className="ShowList-animation"></div>
                        </div>
                    </div>
                </div>
            );
        }

        const isListEmpty = !showList || showList.length === 0;

        if (isListEmpty) {
            return (
                <div className="ShowList">
                    <div className="ShowList-content">
                        <div className="ShowList-empty">Nothing found so far, try to search for a show you like</div>
                    </div>
                </div>
            );
        }

        return (
            <div className="ShowList">
                <div className="ShowList-content">
                    {showList.map(show => (
                        <ShowItemCompact key={show.id} showItem={show} />
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        showList: state.showList,
        isShowListLoading: state.isShowListLoading,
    };
};

export default connect(mapStateToProps, undefined)(ShowList);
