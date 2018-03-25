import React from 'react';
import PropTypes from 'prop-types';
import WorkOrdersList from 'components/work_orders/WorkOrdersList';
import css from '../main/main.scss';
import {Link, Route, Switch} from 'react-router-dom';

function WorkOrdersNav(props) {
    return(
        <div className='navbar navbar-expand-lg navbar-light bg-light'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link
                        className='btn btn-primary'
                        to='/work_orders'>
                        Work Order List
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        className='btn btn-primary'
                        to='/work_orders/create'>
                        New Work Order
                    </Link>
                </li>
            </ul>
        </div>
    );
}

class WorkOrdersMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <WorkOrdersNav />
                <Switch>
                    <Route
                        exact path='/work_orders'
                        component={WorkOrdersList}
                    />
                </Switch>
            </div>
        );
    }
}

export default WorkOrdersMain;