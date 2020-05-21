import React, { Component } from 'react';
import './History.css';
import { isEmpty } from "lodash";
import HistoryBody from './HistoryBody.js';

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: ''
        }
    }

    render() {
        return (
            <div className="history">
                <div className="sectionHeader"><h2>History</h2></div>
                {isEmpty(this.props.fasts) &&
                    <div className="emptyMessage">
                        No fasts yet. Select a template fast or create a custom fast to start!
                    </div>
                }

                {!isEmpty(this.props.fasts) &&
                    <HistoryBody
                        fasts={this.props.fasts}
                        parseTime={this.props.parseTime}
                        editNote={this.props.editNote}
                    />
                }
            </div>
        );
    }
}

export default History