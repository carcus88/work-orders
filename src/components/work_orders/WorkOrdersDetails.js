import React from 'react';
import WorkOrdersItemCard from 'components/work_orders/WorkOrdersItemCard';


class WorkOrdersDetails extends React.Component {
    render(){
        return(
            <div>
                <h5>Job Items</h5>
                <WorkOrdersItemCard />
            </div>
        );
    }
}

export default WorkOrdersDetails;