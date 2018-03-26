import React from 'react';
import WorkOrdersList from 'components/work_orders/WorkOrdersList';

class WorkOrdersMain extends React.Component {
    render(){
        return(
            <div>
                <WorkOrdersList />
            </div>
        );
    }
}

export default WorkOrdersMain;