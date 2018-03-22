import React from 'react';
import {Link, Route } from 'react-router-dom';

const Item = (props) => {
    var count = props.count;
    this.props = {
        jobName: 'Job ' + count,
        jobDate: new Date().toLocaleDateString(),
        jobDescription: 'Shudder repair',
    }
    return (
        <div>
            <div>
                <Link to={`${props.url}/edit/:id`}>{this.props.jobName}</Link>
            </div>
        </div>
    );
}

function ItemList(props) {
    return(
        <div>
            <Item url={props.url} count={props.count}/>
        </div>
    );
}


class WorkOrderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            list: [],
        }
    }

    render() {
        return (
            <div>
                <h3>Work Orders List</h3>
                <ItemList url={this.props.url} />

            </div>

        );
    }
}

export default WorkOrderList;