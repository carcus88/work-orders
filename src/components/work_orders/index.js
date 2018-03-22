import React from 'react';
import {Link, Route, Switch     } from 'react-router-dom';
import WorkOrdersButtonPanel from 'components/work_orders/button_panels';
import WorkOrderList from 'components/work_orders/work_order_list';
import Form from 'components/work_orders/work_order_form';


function MainButtonPanel(props) {
    return (
        <div className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className={'btn btn-primary'} to={`${props.url}/create`}>
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
        this.setState = {
            counter: 0,
        };
    }

    render() {
        return (
            <div>
                <h1>Work Orders</h1>
                <MainButtonPanel url={this.props.url}/>
                <Switch>
                    <Route exact path="/work_orders" component={WorkOrderList}/>
                    <Route path="/work_orders/create" component={Form}/>

                </Switch>
            </div>
        );
    }
}

export default WorkOrdersMain;