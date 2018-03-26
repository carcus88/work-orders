import React from 'react';
import {Link} from 'react-router-dom';

class WorkOrdersEditButton extends React.Component {
    render(){
        return(
            <div>
                <Link to='/work_orders/edit'>Edit</Link>
            </div>
        );
    }
}

export default WorkOrdersEditButton;