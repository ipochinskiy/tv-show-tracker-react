import React from 'react';
import { connect } from "react-redux";
import ShowItemCompact from './ShowItemCompact';
import './ShowList.scss';

export class ShowList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { showList } = this.props;
        const isListEmpty = !showList || showList.length === 0;

        return (
            <div className="ShowList">
                <div className="ShowList-content">
                    {isListEmpty
                        ? <div>Nothing is there</div>
                        : showList.map(show => (
                            <ShowItemCompact key={show.id} showItem={show} />
                        ))
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        showList: state.showList,
    };
};

export default connect(mapStateToProps, undefined)(ShowList);
