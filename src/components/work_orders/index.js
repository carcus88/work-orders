import React from 'react';
//import {Link, Route} from 'react-router-dom';
import WorkOrdersButtonPanel from 'components/work_orders/button_panels';
import Form from 'components/work_orders/work_order_form';

class WorkOrdersMain extends React.Component {
    constructor(props){
        super(props);
        this.setState = {
            counter: 0,
        }
    }
    render() {
        return (
            <div>
                <WorkOrdersButtonPanel/>
                <Form/>

            </div>
        );
    }
}

export default WorkOrdersMain;