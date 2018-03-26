import React from 'react';
import {Link} from 'react-router-dom';

class WorkOrdersViewButton extends React.Component {
    render(){
        return(
            <div>
                <Link to='/work_orders'>View</Link>
            </div>
        );
    }
}

export default WorkOrdersViewButton;