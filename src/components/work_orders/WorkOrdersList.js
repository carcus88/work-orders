import React from 'react';
import WorkOrdersCard from 'components/work_orders/WorkOrdersCard';

class WorkOrdersList extends React.Component {
    render(){
        return(
            <div>
                <WorkOrdersCard/>
            </div>
        );
    }
}

export default WorkOrdersList;